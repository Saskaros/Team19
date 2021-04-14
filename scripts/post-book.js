/**
 * Function to add a user-created book listing into Firebase.  
 * @param {Object} user - Authenticated user on Firebase.
 * @param {String} user.uid - Unique ID of the user that is logged in. 
 * @param {String} name - Name of user that is logged in.
 * @param {String} email - E-mail of user that is logged in.
 * @param {String} ti - Title of the book.
 * @param {String} aut - Author of the book.
 * @param {String} isb - ISBN of the book.
 * @param {String} pri - Price of the book.
 * @param {String} date - Date the posting was created. 
 * @param {String} condition - Condition of the book. 
 * @param {HTMLElement} fileInput - Uploaded image of the book. 
 */
 function postBook() {
	document.getElementById("post").addEventListener('click', function () {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				// User is signed in.
				// Retrieve unique user ID 
				db.collection("users").doc(user.uid)
					.get()
					.then(function (doc) {
						// Retrieve user's name and email  
						var name = doc.data().name;
						var email = doc.data().email;
						// Retrieve book information from the page form 
						var ti = document.getElementById("title").value;
						var aut = document.getElementById("author").value;
						var isb = document.getElementById("isbn").value;
						var pri = document.getElementById("price").value;
						var today = new Date();
						var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
						var conditionElement = document.getElementById("condition");
						var condition = conditionElement.options[conditionElement.selectedIndex].text;
						var fileInput = document.getElementById("txtpic-input");
						var file = fileInput.files[0];
						//store using this name
						var storageRef = storage.ref("images/" + file.name);
						//upload the picked file into storage
						storageRef.put(file)
							.then(function (snapshot) {
								snapshot.ref.getDownloadURL().then(function (downloadURL) {
									db.collection("textbooks").doc().set({
										// Assign attributes to the textbook document
										"Title": ti,
										"Author": aut,
										"ISBN": isb,
										"Price": pri,
										"Condition": condition,
										"ImageURL": downloadURL,
										"Date": date,
										"UserName": name,
										"UserEmail": email
									})
								})
							});
					})
			}
		})
	})
}
postBook();