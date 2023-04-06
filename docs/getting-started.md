---
title: Getting started
sidebar_label: Introduction
slug: /
---

Hello

:::info
you can write information in here
:::

Graphs can be done using [Mermaid](https://mermaid.js.org/intro/)

```mermaid
---
title: Adding a new Account Member
---
sequenceDiagram
    autonumber
    participant AH as Account Holder
    participant P as Partner
    participant S as Swan
    participant AM as Account Member<br>(future)
    AH->>P: Approves future Account Member
    P->>S: Sends request (addAccountMembership)
    S-->>P: Returns ID (accountMembershipId)
    P-->>AM: Sends login URL
    AM->>S: Logs in using OAuth2.0
    S--xAM: Authenticates Account Member
    AM-->>P: Redirected to Partner app
    P->>S: Requests Account Member's access token
    S-->>P: Returns token
    P->>S: Uses token to bind Account Member
    S-->>P: Confirms binding is a success
```

```mermaid
---
title: Managing payments with virtual IBANs
---
flowchart LR
    A[Payment #1] --sent to--> B([Virtual IBAN #1])
    C[Payment #2] --sent to--> D([Virtual IBAN #2])
    E[Payment #3] --sent to--> F([Virtual IBAN #3])
    B & D & F --> G((Main IBAN))
```