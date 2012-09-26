function pb_open() {
	alert('Todo: Open.');
}

function pb_save() {
	alert('Todo: Save.');
}

function pb_export_epub() {
	alert('Todo: Export to ePub.');
}

function pb_load_chapter() {
	var toc_value = $('#toc select').val();
	
	if (toc_value == '[Add New Chapter]') {
		pb_new_chapter();
	} else {
		alert('Todo: Load Chapter.');
	}
}

function pb_new_chapter() {
	alert('Todo: Create New Chapter.');
}

$(document).ready( function() {
	$('a#open').click( function() { pb_open(); });
	$('a#save').click( function() { pb_save(); });
	$('a#export-epub').click( function() { pb_export_epub(); });
	$('#toc select').change( function() { pb_load_chapter(); });
});


