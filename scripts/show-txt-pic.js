/**
 * Function to render a book image preview after a user selects one from their local drive.
 * @param {HTMLElement} fileInput - Location of file uploaded by user.
 * @param {HTMLElement} image - Image uploaded by user.
 * @return {String} bookImage - Created URL of image object. 
 */
 function showTxtPic() {
	var fileInput = document.getElementById("txtpic-input"); // Pointer to file location 
	const image = document.getElementById("txtpic-goes-here"); // Pointer to file image 
	fileInput.addEventListener('change', function (e) { //event listener
		var file = e.target.files[0];
		var bookImage = URL.createObjectURL(file);
		image.src = bookImage; //change DOM image
	})
}
showTxtPic();