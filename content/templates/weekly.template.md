<%*
// Set folder you want to get latest file for here
const folder = "tags/seasons";

// Get frontmatter keys of interest
const createdAtKey = "date";
const titleKey = "title";

const latestFileInFolder = app.vault.getMarkdownFiles().reduce((acc, file) => {
  // Skip files not in folder
  if (!file.path.startsWith(folder)) {
    return acc;
  }

  // Get time file was created from frontmatter
  const createdAt = app.metadataCache.getFileCache(file)?.frontmatter?.[createdAtKey];
  const noteTitle = app.metadataCache.getFileCache(file)?.frontmatter?.[titleKey];

  // If file has created at frontmatter and if that file was created more recently than the currently found most recently created file, then set most recently created file to file
  if (
    createdAt &&
    (!acc || new Date(createdAt).getTime() > new Date(acc.createdAt).getTime()))
  {
    acc = { file, noteTitle, createdAt };
  }

  return acc;
}, null);

let latestFileTitle = latestFileInFolder.noteTitle;
let latestFileSeasonTag = `seasons/${latestFileInFolder.file.basename}`

let startDate = moment(latestFileInFolder.createdAt);
let now = moment();

let weeks = now.diff(startDate, 'weeks', true);
let roundedWeeks = Math.ceil(weeks);

let title = `${latestFileTitle}: Week ${roundedWeeks}`

-%>---
title: "<% title %>"
date: <% tp.date.now() %>
tags:
  - <% latestFileSeasonTag %>
  - notes/weekly
draft: false
---
## Up & Coming

TODO

### Projects

TODO

## Tasks

### Due

```dataview
TASK
WHERE !completed
  AND typeof(due) = "date"
  AND due <= date("<% tp.date.now() %>") + dur(7 days)
SORT date ASC
GROUP BY file.link
```

### Done

```dataview
TASK
WHERE typeof(completion) = "date"
  AND completion >= date("<% tp.date.now() %>")
  AND completion < date("<% tp.date.now() %>") + dur(7 days)
SORT date DESC
GROUP BY file.link
```

## Hindsight

TODO