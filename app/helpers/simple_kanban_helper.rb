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

  def issues_categories_todo(project)
    IssueCategory.joins(
      'RIGHT JOIN issues ON issue_categories.id = issues.category_id
       LEFT JOIN versions ON issues.fixed_version_id = versions.id')
      .where(["issues.project_id = ?", project.id])
      .where("versions.name='TODO' or versions.name IS NULL")
      .distinct
      .order(:name)
  end

  def issues_by_category(category, project)
    Issue.open
      .joins(:tracker, :priority)
      .joins('LEFT JOIN versions ON issues.fixed_version_id = versions.id')
      .joins('LEFT JOIN issue_categories ON issue_categories.id = issues.category_id')
      .where(["issues.project_id = ?", project.id])
      .where(category: category)
      .where("versions.name = 'TODO' or versions.name IS NULL")
  end
end
