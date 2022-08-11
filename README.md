# [virenbar.ru](virenbar.github.io) [![Status](https://img.shields.io/github/workflow/status/Virenbar/virenbar.github.io/Deploy%20Jekyll%20site%20to%20Pages?label=Status&logo=github)](https://github.com/Virenbar/virenbar.github.io/actions/workflows/publish.yml)

This repository contains source code for my personal site

## Local Building

[Install Jekyll](https://jekyllrb.com/docs/installation/)

```console
bundle install
bundle exec jekyll serve --livereload
```

Open <http://localhost:4000/> to view site

## Resources used

* [Jekyll](https://jekyllrb.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Bootswatch - Darkly](https://bootswatch.com/darkly/)
* [FontAwesome](https://fontawesome.com/)

## Notes

### Translation

Translation based on:

* [chocanto.me](http://chocanto.me/2016/04/16/jekyll-multilingual.html)
* [forestry.io](https://forestry.io/blog/creating-a-multilingual-blog-with-jekyll/#create-data-files-for-translations-and-language-metadata)

```md
{%- assign t = site.data.translation -%}
{{t['test'][page.lang]}}
OR
{%- include t.html id='test' -%}
```
