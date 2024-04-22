<%*
let title = tp.file.title
if (title.startsWith("Untitled")) {
  title = await tp.system.prompt("Title");
}
await tp.file.rename(title)
-%>---
title: ~
date: <% tp.date.now() %>
tags:
  - <% tp.file.path(true).slice(5, -3) %>
draft: false
---
## Overview

TODO

## Deliverables

1. 
2. 
3. 

## Tasks

### Upfront

- [ ] #task #<% tp.file.path(true).slice(5, -3) %> Draft initial project reqs

- [ ] #task #<% tp.file.path(true).slice(5, -3) %> Hindsight write-up
### Other

```dataview
TASK
WHERE contains(tags, "#<% tp.file.path(true).slice(5, -3) %>")
  AND file.name != "<% tp.file.title %>"
GROUP BY file.link
```

## Hindsight

TODO