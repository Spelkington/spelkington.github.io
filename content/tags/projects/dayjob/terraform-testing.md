---
title: 
date: 2024-04-18
tags:
  - projects/dayjob/terraform-testing
draft: false
---
## Overview

Soft plan docs for using [Terraform LocalStack](https://docs.localstack.cloud/user-guide/integrations/terraform/) for local testing of infrastructure-as-code.
- [i] The goal here is to minimize the time on feedback loop for particularly hard-to-test, yet critical pieces of cloud infrastructure. The length of the current AFT feedback loop makes it a *particular pain in the ass* to test quickly & repeatedly, so something like this would be a huge boon
- [i] This isn't the first time something of the same flavor has come up — we looked previously at a stack for [locally validating Account Factory Terraform](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/validate-account-factory-for-terraform-aft-code-locally.html) code, but the fact that this setup is literally measured in epics gave us the impression that this wouldn't be a quick integration and we tabled it awhile back.

## Deliverables

- [-] Ability to locally test Account Factory Terraform on LocalStack

## Tasks

### Upfront

- [x] #task #projects/dayjob/terraform-testing Draft initial project reqs  [completion:: 2024-04-18]

- [x] #task #projects/dayjob/terraform-testing Hindsight write-up  [completion:: 2024-04-18]
### Other

```dataview
TASK
WHERE contains(tags, "#projects/dayjob/terraform-testing")
  AND file.name != "terraform-testing"
GROUP BY file.link
```

## Hindsight

[[terraform-localstack|Binned — rationale available]]