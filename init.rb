Redmine::Plugin.register :simple_kanban do
  name 'Simple Kanban plugin'
  author 'Sava Chankov'
  description 'Adds interactive kanban overview to Redmine. Simple to setup and intuitive to use.'
  version '0.0.1'
  
  project_module :simple_kanban do
    permission :simple_kanban, :simple_kanban => :index
  end
  menu :project_menu, :kanban, {:controller => 'simple_kanban', :action => 'index' }, :caption => :project_menu, :after => :activity, :param => :project_id
end
