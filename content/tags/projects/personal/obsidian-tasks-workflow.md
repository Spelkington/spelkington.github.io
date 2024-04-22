---
title: 
date: 2024-04-14
tags:
  - projects
  - "#goblin-slaying"
draft: false
---
## Overview


As an ongoing need to set up a better personal task system, I'd like to better leverage the Obsidian Tasks plugin. Part of this is integrating a better system for keeping track of projects progress, and being able to effectively link it to the [[daily|daily notes]] (along with weekly/quarterly, as those start to... *actually happen*)

My understanding is that the mechanism can work like this:

1. Projects can be defined under the #projects tag (and subtags)
2. Tasks can be created by creating a checkbox item starting with #task, with an attached association to the appropriate #projects.
3. This will also let me do notes/articles/write-ups on certain projects, also providing a paper trail on what actually worked/didn't work and get a full timeline of attempts/trials/drafts.

So, to start — let's give it a try with this project: setting up all of the above.

## Deliverables

1. 
2. 
3. 

## Tasks

### Upfront

- [x] #task #projects/personal/obsidian-tasks-workflow Draft initial project reqs  [completion:: 2024-04-14]
- [x] #task #projects/personal/obsidian-tasks-workflow Set up basic workflow using Templates, Tasks & Dataview  [completion:: 2024-04-14]
- [ ] #task #projects/personal/obsidian-tasks-workflow Hindsight write-up
### Other

```dataview
TASK
WHERE contains(tags, "#projects/personal/obsidian-tasks-workflow")
  AND file.name != "obsidian-tasks-workflow"
GROUP BY file.link
```

## Hindsight

Well, damn - I put this off for *literal weeks*, basically psyched myself out of doing a bunch of actual useful work, and it took... about an hour. I'd be lying if I said this was the first time something like this has happened.

Admittedly, I did spend those weeks mulling over how to go about it, so it wasn't entirely time wasted. It is pretty funny, though, to think about how molehills can become mountains by just thinking about it for too long.

Especially with the new template, setting up projects — CGC, personal, and dayjob — should be a breeze. I think it'll mesh well with a new project template block, since I'd be able to quickly define "I'll be working today on these three projects, and do these defined tasks" up front.

I'm also pretty thrilled with the Tasks team's decision to allow forwarding, where I can manually mark a task with `[>]` to denote that it should be kicked to another day. Ideally, in the future, I'd take a look at how many of these I use, in order to measure, in a general sense, whether or not I've been getting better about biting off more than I can chew.

10/10 would project again.
