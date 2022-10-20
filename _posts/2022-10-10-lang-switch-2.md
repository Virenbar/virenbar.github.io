---
title: Смена языка - 2
---
Изначально для перевода проектов планировалось использовать коллекции Jekyll, но оказалось что логика формирования коллекций отличается от постов.  
Невозможно объединить страницы из `projects` и `en/project` в одну коллекцию, поэтому пришлось использовать `site.pages`.

Теперь в `_config.yml` для `projects` и `en/project` указано `layout: "project"`

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

И все проекты для текущего языка можно получить так:  
{% raw %}`{%- assign projects = site.pages | where: 'layout', 'project' | where: 'lang', page.lang -%}`{% endraw %}  
Или для другого языка:  
{% raw %}`{%- assign projects = site.pages | where: 'layout', 'project' -%}`{% endraw %}  
{% raw %}`{%- assign tpages = projects | where: 'name', page.name | sort: 'lang' -%}`{% endraw %}
