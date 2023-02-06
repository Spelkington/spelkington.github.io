import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { graphql, useStaticQuery } from "gatsby";
import * as queryString from "query-string";

// Unfortunately, it doesn't seem like this library has typing. Until I can find it,
// suppressing error.
// @ts-ignore
import { useFlexSearch } from "react-use-flexsearch";

interface SearchBarProps {
  submitCallback: (query: string, results: string[]) => void;
  location: any;
}

const SearchBar = ({ submitCallback, location }: SearchBarProps) => {
  const data = useStaticQuery(graphql`
    query IndexAndIDQuery {
      localSearchPosts {
        index
        store
      }
    }
  `);

  // Fetch a potential search parameter from the URL
  //
  // This gets passed as the initial query: e.g:
  //
  //  https://spelkington.github.io?search=Python
  //
  //  will automatically search for "Python" on load
  const { search } = queryString.parse(location.search);

  // Load in the search index and detail store from the localSearchPost query
  const index = data.localSearchPosts.index;
  const store = data.localSearchPosts.store;

  // Set up the query being used as a functional state and run a search
  //
  // This portion defaults to "", unless a searchParam was found in the URL
  const [query, setQuery] = useState(search ? search : "");
  const results = useFlexSearch(query, index, store);

  // On results update, bubble the post slug matches through the provided submission
  // callback
  React.useEffect(() => {
    const slugs: string[] = [];
    results.map(result => {
      slugs.push(result.path);
    });
    submitCallback(query, slugs);
  }, [results]);

  return (
    <div className="search-bar">
      {/* <img
        className="search-icon"
        src="https://www.svgrepo.com/show/498926/search.svg"
      ></img> */}
      <Formik
        initialValues={{ query: query }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query);
          setSubmitting(false);
        }}
      >
        <Form>
          <Field className="search-field" name="query" />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
