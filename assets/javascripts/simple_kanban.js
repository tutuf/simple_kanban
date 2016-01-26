$(function() {
  $(".kanban_card").disableSelection();
  $(".kanban_card").draggable();
  $(".status_column, .category_row").droppable({
    drop: function( event, ui ) {
      var column = $(this);
      var kanban_card = ui.draggable;
      var issue_href = kanban_card.find('a.issue_id')[0].href;
      var issue_id = kanban_card.data('issue_id');
      var new_issue_status_id = $(this).data('issue_status_id');
      var old_issue_status = kanban_card.data('issue_status');

      var old_column = kanban_card.closest('.status_column');
      var version_id = column.data('version_id')
      var issue = {id: issue_id, status: old_issue_status};
      insert_kanban_card(column, kanban_card, issue)
      kanban_card.css({top: 0, left: 0});
      $.ajax({
        url: issue_href,
        data: { issue: { status_id:        new_issue_status_id,
                         fixed_version_id: version_id} },
        dataType: 'json',
        type: 'PUT',
        error: function(jq_xhr, text_status, error_thrown) {
          // Redmine renders empty response on success which is invalid JSON so jQuery balks at it with 'parsererror'
          if (jq_xhr.status == 200) {
            // check whether status has really changed because when user has not been given permission for this workflow,
            // Redmine ignores status change but saves the issue and returns 200 OK
            $.get('/issues/' + issue_id + '.json',
                  {key: redmine_api_key},
                  function(data) {
                    var issue = data.issue
                    if  (version_id == issue.fixed_version.id) {
                      $.jGrowl("#" + issue_id + " беше преместен в " + issue.fixed_version.name);
                      insert_kanban_card(column, kanban_card, issue);
                    }
                    if(issue.status.id == new_issue_status_id && new_issue_status_id != old_issue_status.id) {
                      $.jGrowl("Статусът на #" + issue_id + " беше сменен от '" + old_issue_status.name + "' на '" + issue.status.name +"'");
                      insert_kanban_card(column, kanban_card, issue);
                    } else if (new_issue_status_id != old_issue_status.id) {
                      alert("Статусът на #" + issue_id + "не може да бъде сменен на '" + issue.status.name +"',\nтъй като не сте управомощен за това.");
                      insert_kanban_card(old_column, kanban_card, issue)
                    }
            });
          } else {
            alert("Статусът на #" + issue_id + " не беше сменен\n" + error_thrown + "\n" + jq_xhr.statusText)
            insert_kanban_card(old_column, kanban_card, issue)
          }
        }
      });
   }
 })
 $(".status_column, .category_row").each( function(){ sort_kanban_cards($(this)) })
 $(".status_column").css('width', (100 / $('table.kanban').first().find('td.status_column').size()) + '%' )
 $('.closed_status').click(function() {
   $('.closed_status').remove()
   $('.open_status').css('width', (100 / $('table.kanban').first().find('td.open_status').size()) + '%' )
  })
})

// Arguments are jQuery objects
function insert_kanban_card(column, kanban_card, issue) {
  column.append(kanban_card)
  kanban_card.data('issue_status', issue.status)
  if (column.hasClass('open_status')) { sort_kanban_cards(column) }
}

function sort_kanban_cards(column) {
  column.find('.kanban_card').tsort({data:'issue_tracker_position'}, {data:'issue_priority_position', order: 'desc'}, {data:'issue_id'});
}
