# virenbar.github.io

My personal site

## Notes

### Building

```console
bundle install
bundle exec jekyll serve --livereload
```

### [Translation](./_data/translation.yml) usage

```md
{%- assign t = site.data.translation -%}
{{t['test'][page.lang]}}
OR
{%- include t.html id='test' -%}
```
