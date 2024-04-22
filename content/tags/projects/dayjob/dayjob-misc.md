---
title: ~
date: 2024-04-17
tags:
  - projects/dayjob/dayjob-misc
draft: false
---
## References

```dataview
TASK
WHERE contains(tags, "#projects/dayjob/dayjob-misc")
  AND file.name != "dayjob-misc"
GROUP BY file.link
```