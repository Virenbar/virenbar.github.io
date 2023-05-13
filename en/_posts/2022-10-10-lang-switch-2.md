---
title: Language switcher - 2
---
The original plan was to use Jekyll collections to translate projects, but it turned out that the logic behind the collections is different from the posts.  
It is not possible to combine pages from `projects` and `en/project` into one collection, so I had to use `site.pages`.

Now in `_config.yml` for `projects` and `en/project` it says `layout: "project"`.

```yml
- scope:
    path: "en/projects"
  values:
    layout: "project"

- scope:
    path: "projects"
  values:
    layout: "project"
```

And you can get all projects for the current language like this:  
{% raw %}`{%- assign projects = site.pages | where: 'layout', 'project' | where: 'lang', page.lang -%}`{% endraw %}  
Or for another language:  
{% raw %}`{%- assign projects = site.pages | where: 'layout', 'project' -%}`{% endraw %}  
{% raw %}`{%- assign tpages = projects | where: 'name', page.name | sort: 'lang' -%}`{% endraw %}