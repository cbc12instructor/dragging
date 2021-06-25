// mousedrag
// mousedown
// mouseup
// click
// dblclick
// mousemove

let dragging = false;
let draggingEl;
let mouseX = 0;
let mouseY = 0;
let storeX = 0;
let storeY = 0; 

function getEl(elId) { 
	return document.getElementById(elId);
}


document.addEventListener('DOMContentLoaded', function() {

	// when I click on a draggable element
	document.addEventListener('mousedown', function(event) {
		//console.log(event.target);
		// only work on elements of .drag
		//if ( event.target.className.search('drag') != -1 ) {
		if ( event.target.classList.contains('drag') ) {
			// if we are mouse down _AND_ we move the mouse, move the element.
			dragging = true;
			draggingEl = event.target;
			
			storeX = event.clientX;
			storeY = event.clientY;
		}
	});

	document.addEventListener('mousemove', function(event) {
		event.preventDefault();

		// if we are dragging, lets move our element
		getEl('clientX').innerHTML = event.clientX;
		getEl('clientY').innerHTML = event.clientY;

		if ( dragging ) {
			getEl('clientX').innerHTML = event.clientX;
			getEl('clientY').innerHTML = event.clientY;

			mouseX = storeX - event.clientX;
			mouseY = storeY - event.clientY;
			storeX = event.clientX;
			storeY = event.clientY;

			// TODO (figure out the offset of where my mouse is, vs where we click in the element)
			draggingEl.style.left = (draggingEl.offsetLeft - mouseX) + 'px';
			draggingEl.style.top  = (draggingEl.offsetTop  - mouseY) + 'px';
		}
	});

	document.addEventListener('mouseup', function(event) {
		// if we are dragging, stop
		dragging = false;
		if ( draggingEl ) {
			console.log('dropping the element');
			//draggingEl.style.top = event.clientY + 'px';
			//draggingEl.style.left = event.clientX + 'px';
		}
	});


	// and hold the mouse down
	// move the element to a new position
	// when I release my mouse button
	// drop the element to where it is
	document.addEventListener('mousemove', function(event) {
		//console.log( event);
	});

});