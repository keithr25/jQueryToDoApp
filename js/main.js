var addTask = 3;

$('form').on('submit', function () {

	var newTask = $('#create-text').val();
    var importance = $('#create-importance option:selected').val();
    addTask++
    
    
    var $myTask = '<input id="task-' + addTask + '" type="checkbox"><label class="text" for="task-' + addTask + '">' + newTask + ' </label><span class="remove"></span>';
    var $newDiv = $('<div class="task">').html($myTask).addClass(importance);

    $('#tasks').append($newDiv);

    $newDiv.on('click', hideCompleted)
    
   $('span.remove').on('click', deleteTask);
    return false;

})

// toggle completed tasks on and off
$('#show-completed').on('click', function () {
	if ($('#show-completed').is(':checked')) {
		$('.task > input:checked').parent().show();        
	} else {
		$('.task > input:checked').parent().hide();
	}
    
})

// function to hide completed tasks when show completed not checked
function hideCompleted () {
    if (!$('#show-completed').is(':checked')) {
        $('.task > input:checked').parent().hide();
    }
    
}

$('div > input').on('click', hideCompleted);

// delete function to remove tasks
function deleteTask() {
		$(this).parent().remove();
}


$('.task > span.remove').on('click', deleteTask);