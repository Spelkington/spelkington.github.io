---
title: ~
date: 2024-04-17
tags:
  - projects/personal/misc
draft: false
---
## References

```dataview
TASK
WHERE contains(tags, "#projects/personal/personal-misc")
  AND file.name != "personal-misc"
GROUP BY file.link
```