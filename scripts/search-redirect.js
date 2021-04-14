/**
 * Function that redirects user from search page to the book listing after they click on View Details. 
 * @param {String} id - Unique id of textbook document.
 */
 function addBookListener(id) {
	document.getElementById(id)
		.addEventListener("click", function () {
			window.location.href = "details.html?id=" + id;
		});
}