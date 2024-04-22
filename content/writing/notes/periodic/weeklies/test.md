---
title: "The Season of Rhythm: Week 7"
date: 2024-04-15
tags:
  - seasons/rhythm
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
  AND due <= date("2024-04-15") + dur(7 days)
SORT date ASC
GROUP BY file.link
```

### Done

```dataview
TASK
WHERE typeof(completion) = "date"
  AND completion >= date("2024-04-15")
  AND completion < date("2024-04-15") + dur(7 days)
SORT date DESC
GROUP BY file.link
```

## Hindsight

TODO