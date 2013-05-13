$(function() {
  $(".kanban_card").disableSelection();
  $(".kanban_card").draggable();
  $(".status_column").droppable({
    drop: function( event, ui ) {
      $(this).append(ui.draggable);
      ui.draggable.css('top', '').css('left', '');
      var issue_href = ui.draggable.find('a.issue_link')[0].href;
      var issue_status_id = $(this).find('.issue_status_id').first().text();
      // TODO: check permission for the issue_status change, because Redmine silently refuses to update issue if
      // user is not allowed to do so and returns HTTP OK 200
      $.ajax({
        url: issue_href,
        data: { issue: { status_id: issue_status_id } },
        dataType: 'json',
        type: 'PUT',
        success: function(data, text_status, jq_xhr) { $.jGrowl("Successfully updated " + issue_href) },
        error: function(jq_xhr, text_status, error_thrown){ $.jGrowl("Couldn't change issue status") }
     })
   }
 })
})