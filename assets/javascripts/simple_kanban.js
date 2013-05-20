$(function() {
  $(".kanban_card").disableSelection();
  $(".kanban_card").draggable();
  $(".status_column").droppable({
    drop: function( event, ui ) {
      var column = $(this);
      var kanban_card = ui.draggable;
      var issue_href = kanban_card.find('a.issue_link')[0].href;
      var issue_id = kanban_card.data('issue_id');
      var new_issue_status_id = $(this).data('issue_status_id');
      kanban_card.css('top', '').css('left', '');
      $.ajax({
        url: issue_href,
        async: false,
        data: { issue: { status_id: new_issue_status_id } },
        dataType: 'json',
        type: 'PUT',
        success: function(jq_xhr, text_status, error_thrown) {
          // check whether status has really changed because when user has not been given permission for this workflow,
          // Redmine ignores status change but saves the issue and returns 200 OK
          $.get('/issues/' + issue_id + '.json',
                {key: redmine_api_key},
                function(data) {
                  var issue = data.issue
                  if (issue.status.id == new_issue_status_id) {
                    $.jGrowl("Changed status of #" + issue_id);
                    insert_kanban_card(column, kanban_card);
                  } else {
                    alert("Couldn't change issue status of #" + issue_id + ".\nPlease, ask project manager for permissions.")
                  }
                } );
        },
        error: function(jq_xhr, text_status, error_thrown) { alert("Couldn't change issue status of #" + issue_id) }
      });
   }
 })
})

// Arguments are jQuery objects
function insert_kanban_card(column, kanban_card){
  column.append(kanban_card);
  column.find('.kanban_card').tsort({data:'issue_tracker_position'}, {data:'issue_priority_position'}, {data:'issue_id'});
}