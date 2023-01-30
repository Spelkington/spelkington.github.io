import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { graphql, useStaticQuery } from "gatsby";

// Unfortunately, it doesn't seem like this library has typing. Until I can find it,
// suppressing error.
// @ts-ignore
import { useFlexSearch } from "react-use-flexsearch";

interface SearchBarProps {
  submitCallback: (query: string, results: string[]) => void;
}

const SearchBar = ({ submitCallback }: SearchBarProps) => {
  const data = useStaticQuery(graphql`
    query IndexAndIDQuery {
      localSearchPosts {
        index
        store
      }
    }
  `);

  const index = data.localSearchPosts.index;
  const store = data.localSearchPosts.store;

  const [query, setQuery] = useState("");
  const results = useFlexSearch(query, index, store);

  React.useEffect(() => {
    console.log("Searching slugs...");
    const slugs: string[] = [];
    results.map(result => {
      console.log(result);
      slugs.push(result.path);
    });
    submitCallback(query, slugs);
  }, [results]);

  return (
    <div>
      <Formik
        initialValues={{ query: query }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query);
          setSubmitting(false);
        }}
      >
        <Form>
          <Field name="query" />
        </Form>
      </Formik>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.path}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
