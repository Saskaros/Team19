/**
 * Function to perform a search query for textbooks based on title. Displays results in a card format. 
 * @param {HTMLElement} searchValue - Query entered by user in search bar.
 * @param {String} Title - Book title.
 * @param {String} id - Unique id of textbook document. 
 * @return {String} ImageURL - Image of textbook. 
 * @return {String} Title - Book title.
 * @return {String} Author - Book author. 
 * @return {String} Price - Listing price of book.
 * @return {String} Condition - Condition of book.
 */
 function bookSearch() {
	document.getElementById("submit").addEventListener('click', function (event) {
		event.preventDefault();
		// read book title from search bar
		var searchValue = document.getElementById("book").value;
		// read textbooks collection from firestore, with query
		db.collection("textbooks")
			// Search for Firebase entries where title is an exact match 
			.where("Title", "==", searchValue)
			.get()
			.then(function (snap) {
				snap.forEach(function (doc) {
					console.log(doc.data());
					var id = doc.id;
					// Show results 
					$("#results").append(`<div class="row"><div class="col list-img"><img src="${doc.data().ImageURL}"></div><div class="col-8 list-text"><span class="booktitle">${doc.data().Title}</span> <br> by <span class="bookauthor">${doc.data().Author} </span> <br><span class="bookprice">$${doc.data().Price}</span><br>Condition: ${doc.data().Condition} <br><button class="bookbutton" id = ${doc.id}>View Item</button></div></div><div class="break2"></div>`);
					addBookListener(id);
				})
			})
	})
}
bookSearch();