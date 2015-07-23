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
    IssueCategory.joins(
      'RIGHT JOIN issues ON issue_categories.id = issues.category_id
             JOIN versions ON issues.fixed_version_id = versions.id')
    .where("versions.name='TODO'")
    .distinct
    .order(:name)
  end

  def issues_by_category(category)
    Issue.joins(:tracker, :priority, :fixed_version)
      .joins('LEFT JOIN issue_categories ON issue_categories.id = issues.category_id')
      .where(category: category)
      .where("versions.name = 'TODO'")
  end
end
