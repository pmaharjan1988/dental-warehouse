import
{
  firebaseStorage
}
from 'boot/firebase'
import
{
  getYear
}
from 'date-fns'
import * as firebase from "firebase/app";
import
{
  LocalStorage
}
from 'quasar'


export async function fetchUser(
{
  commit
}, user)
{
  if (user)
  {
    commit("SET_LOGGED_IN", true);
    commit("SET_USER",
    {

      displayName: 'User',
      email: user.email
    });
    LocalStorage.set('STORAGEUSER', true)

  }
  else
  {
    LocalStorage.set('STORAGEUSER', false)
    commit("SET_LOGGED_IN", false);
    commit("SET_USER", null);
  }
}

export async function checkUserState(context)
{
  await firebase.auth().onAuthStateChanged(async user =>
  {
    context.dispatch("fetchUser", user);
  });

}

export function addToCheckout(context, data)
{
  context.commit("SET_TO_CART", data);
}
