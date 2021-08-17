# frozen_string_literal: true
source "https://rubygems.org"

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

gem "jekyll"
gem "webrick"
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
gem 'eventmachine', '1.2.7', git: 'https://github.com/eventmachine/eventmachine.git', tag: 'v1.2.7' if Gem.win_platform?
gem "minimal-mistakes-jekyll"

group :jekyll_plugins do
    gem 'jekyll-sitemap'
end