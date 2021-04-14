/**
 * Function to read and overwrite user profile attributes. 
 * @param {String} user.uid - Unique ID of user logged in. 
 * @param {String} name - Full Name of user. 
 * @param {String} email - Email address of user. 
 */
 function userProfile() {
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in.
			db.collection("users").doc(user.uid)
				.get()
				.then(function (doc) {
					// Display name and e-mail on the form inputs 
					const name = doc.data().name;
					$("#name").val(name);
					const email = doc.data().email;
					$("#email").val(email);
				})
		} else {
			// No user is signed in.
		}
	});
}
userProfile();
$("#profile").submit((event) => {
	event.preventDefault();
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			// Update attributes in Firebase when button is clicked 
			db.collection("users").doc(user.uid).update({
				name: $("#name").val(),
				email: $("#email").val()
			}).then(() => {
				// Display success message
				$("#success").text("Profile details updated successfully!");
			})
		}
	})
})