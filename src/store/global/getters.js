import
{
	firebaseStorage
}
from 'boot/firebase'

import * as firebase from "firebase/app";


export function fetchUser(
{
	commit
}, user)
{
	commit("SET_LOGGED_IN", user !== null);
	if (user)
	{
		commit("SET_USER",
		{

			displayName: 'ADMIN',
			email: user.email
		});
	}
	else
	{
		commit("SET_USER", null);
	}
}

export function checkUserState(context)
{

	firebase.auth().onAuthStateChanged(user =>
	{
		context.dispatch("fetchUser", user);
	});

}
