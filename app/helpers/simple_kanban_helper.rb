# encoding: UTF-8
module SimpleKanbanHelper
  def issue_color(issue)
    case issue.tracker.name
    when 'Задача' then 'blue'
    when 'Дефект' then 'red'
    when 'Подобрение' then 'green'
    when 'Поддръжка' then '#628DB6'
    end
  end
  
  def sort_issues(version, issue_status_id)
    version.fixed_issues \
      .joins(:tracker) \
      .joins(:priority) \
      .where(status_id: issue_status_id) \
      .order( "#{Tracker.table_name}.position",
              "#{IssuePriority.table_name}.position",
              "#{Issue.table_name}.id")
  end
end
