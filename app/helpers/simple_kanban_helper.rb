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
end
