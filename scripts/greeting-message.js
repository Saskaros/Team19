/**
 * Function that displays the user's name for a welcome message after logging in. 
 * @param {Object} user - User logged in through Firebase. 
 * @param {String} user.uid - Unique ID of user. 
 * @return {String} n - Name of user. 
 */
 function sayHello() {
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in
			db.collection("users").doc(user.uid)
				.get()
				.then(function (doc) {
					// Get name of user from Firebase
					var n = doc.data().name;
					// Display on page
					$("#name-goes-here").text(n);
				})
		} else {
			// No user is signed in.
		}
	});
}
sayHello();