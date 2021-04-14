/**
 * Function that retrieves and displays details of the selected book from firebase.
 * @param {String} id - unique ID of the textbook document. 
 * @return {String} ImageURL - URL of the textbook image in Firebase Storage. 
 * @return {String} Title - Textbook title. 
 * @return {String} Author - Textbook author. 
 * @return {String} Condition - Textbook condition. 
 * @return {String} ISBN - ISBN code.
 * @return {String} UserName - Full name of the seller. 
 * @return {String} Date - Date listed. 
 * @return {String} Price - Listed price.
 * @return {String} UserEmail - Email address of the seller. 
 */
 function getDetails() {
	// parse the textbook uid from the URL location
	const parsedUrl = new URL(window.location.href);
	// assign id to a variable
	var id = parsedUrl.searchParams.get("id");
	// use this ID to read from firestore
	db.collection("textbooks")
		.doc(id) //extracted textbook ID 
		.get()
		.then(function (doc) { // display book image and details
			$("#details-go-here").append(`<img src="${doc.data().ImageURL}">`);
			$("#details-go-here").append(`<div class="break3"></div><div class="details-text"><span class="booktitle">${doc.data().Title}</span><br>by <span class="bookauthor">${doc.data().Author}</span><br>Condition: ${doc.data().Condition}<br>ISBN: ${doc.data().ISBN}<br><span class="sellername">Seller: ${doc.data().UserName}</span><br><span class="date">Date Listed: ${doc.data().Date}</span><br><span class="bookprice">$${doc.data().Price}</span></div></div><div class="break3"></div><p></p><a href="mailto:${doc.data().UserEmail}"><button class="buttonwhite">Contact Seller</button></a></div>`);
		})
}
getDetails();