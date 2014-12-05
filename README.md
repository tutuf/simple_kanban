Simple Kanban
=============

Redmine plugin that adds interactive kanban overview. Tested on Redmine 2.2.3, should work with Redmine 2.x+

![screenshot](screenshot.png?raw=true "Users can change issue status by drag'n'dropping the issue between columns")

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
1. Adjust order tracker and issue priorities if you need (in **Administration** → **Settings**).

Usage
-----

This plugin is intended to largely replace project's roadmap. The only thing it currently is able to do beside displaying neatly sorted issues is changing status by drag'n'drop.

Sponsors
--------
* [tutuf](http://tutuf.com/)

Authors
-------
* [Sava Chankov](https://github.com/kanmei)
* [Denitsa Belogusheva](https://github.com/denitsa)

License
-------
This project is licensed under GNU General Public License version 2.
