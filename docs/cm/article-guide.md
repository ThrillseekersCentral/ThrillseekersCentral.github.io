---
title: "How to create an article"
layout: layout/astra-wiki.njk
---

# How to create an article

The newscasters team is split into 2 sections, Weekly News, and Articles
Anybody on the team can submit articles following the steps below:

# Frontmatter

First we need to create the frontmatter. Below is a template you can use

```
---
layout: layout/article.njk
authors: ["AUTHID"]
tags:
  - “TAG1”

title: "TITLE"
tag: "MAINTAG"
summary: "Summary"
---
```

## layout
This must be left alone and should always point to layout/article.njk.
## authors
This must be formatted ["AUTHID"] with AUTHID being replaced by your author ID which can be found [here](https://github.com/ThrillseekersCentral/ThrillseekersCentral.github.io/blob/main/_data/authors.json). Don't have an ID? Don't worry we can get you added! Just contact Jake.
## tags
Tags are shown at the bottom of the page, as well as on SEO (Search engine optimisation) These **MUST** be formatted one per line with a tab Infront of each:

<details>
<summary>Examples</summary>
  
**VALID**
  
```
tags:
  - “TAG1”
  - “TAG2”
  - “TAG3”
```

**INVALID**
```
tags:
- “TAG1”
- “TAG2”
- “TAG3”
```
</details>

## title
The title is the title of the article, this is shown on the page as well as the browser and seo.
## tag
Not to be confused with `tags`, tag is the main tag of the article, these can be: `park-review`, `first-look`, `discord-update` the most up to date list will be displayed on the [top of the CSS file which can be found here](https://github.com/ThrillseekersCentral/ThrillseekersCentral.github.io/blob/main/assets/css/article_parktags.css)  
Want a tag that doesnt exist? Ask a Director!
## summary
This should be a short summary of your article. It will be displayed on SEO, and any widgets the article may show up on

## Frontmatter examples

Below are some examples of frontmatter, hopefully this helps to lean!

```
---
layout: layout/article.njk
authors: ["1"]
tags:
  - “Alton Towers”

title: "Our Trip To Alton Towers"
tag: "park-review"
summary: "On friday, we had had a fun trip over to Alton towers where we saw a tower!"
---
```

# Formatting

Our website has the ability to use most markdown formatting, as long as the filename ends with `.md`.
[You can find a guide on all markdown supported here](https://www.markdownguide.org/cheat-sheet/)

Still got questions? Please contact Jake in the Newscasters general channel!
