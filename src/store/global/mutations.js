export function SET_LOGGED_IN(state, value)
{
	state.user.loggedIn = value;
}

export function SET_USER(state, data)
{
	state.user.data = data;
}
