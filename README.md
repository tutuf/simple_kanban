Simple Kanban
=============

Redmine plugin that adds interactive kanban overview. Simple to setup and intuitive to use. Versions are tables, issue statuses are columns. 
User can change issue status by drag'n'dropping the issue between columns. Tested on Redmine 2.2.3, should work with Redmine 2.2.x+

Installation
------------
Standard Redmine plugin installation instructions apply:

1. Get the plugin

    cd #{RAILS_ROOT}/plugins
    git clone https://github.com/tutuf/simple_kanban.git
    
1. Restart Redmine
1. Go to **Administration** → **Settings** → **Authentication** and check **Enable REST web service**. THIS STEP IS IMPORTANT! Simple Kanban uses the JSON API to communicate with Redmine.

Setup
-----

1. Go to your project's **Settings** → **Modules** and check **Simple Kanban**.
1. For best results we suggest renaming issue priorities to be composed of intuitive symbols only (e.g.  ★, ★★, ★★★ or ♥, ♥♥, ♥♥♥ or even ☃, ☃☃, ☃☃☃).


Usage
-----

This plugin is intended to largely replace project's roadmap. The only thing it currently is able to do beside displaying neatly issues is changing status by drag'n'drop.

Sponsors
--------
* [tutuf](http://tutuf.com/)

Authors
-------
* [Sava Chankov](https://github.com/kanmei)
* [Denitsa Belogusheva]((https://github.com/denitsa)

License
-------
This project is licensed under GNU General Public License version 2.
