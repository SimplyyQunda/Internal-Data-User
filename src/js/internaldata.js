import $ from "jquery";

function internalData () {
	return $.ajax({
		url: 'https://randomuser.me/api/?nat=us&results=12'
	});
}; 


export {internalData};