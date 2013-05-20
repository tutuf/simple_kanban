Simple Kanban
=============

Redmine plugin that adds interactive kanban overview. Simple to setup and intuitive to use. Versions are tables, issue statuses are columns. 
User can change issue status by drag'n'dropping the issue between columns. Should work with Redmine 2.2.3+

Installation
------------
Standard Redmine plugin installation instructions apply:

# Get the plugin

    cd #{RAILS_ROOT}/plugins
    git clone https://github.com/tutuf/simple_kanban.git
    
# Restart Redmine

Setup
-----

Go to your project's **Settings** -> **Modules** -> check *Simple Kanban*
We suggest renaming issue priorities to be composed of star symbols only (e.g.  ★, ★★, ★★★) for best overview.


Usage
-----

This plugin is intended to largely replace project's roadmap. The only thing it currently is able to do beside the kanban style view is issue status change by drag'n'drop.

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
