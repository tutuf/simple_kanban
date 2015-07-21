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

  def issues_categories_todo
    Version.find_by_name('TODO').fixed_issues.map{ |issue| issue.category }.uniq
  end

  def issues_by_category(category)
    Version.find_by_name('TODO').fixed_issues.select{ |issue| issue.category == category}
  end
end
