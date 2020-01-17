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

export async function getAllProducts(context)
{

  let products_data;
  let productCollection = await firebaseStorage.collection('products').get()
    .then(querySnapshot =>
    {
      products_data = querySnapshot.docs.map(doc => doc.data());
      products_data = products_data.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));
      context.commit("SET_ALL_PRODUCT_DATA", products_data);
    })
    .catch(err =>
    {

    });

}

export async function getSingleProduct(context, id)
{
  let productData = await firebaseStorage.collection('products');
  let query = productData.where('id', '==', id).get()
    .then(snapshot =>
    {
      if (snapshot.empty)
      {
        console.log('No matching documents.');
        return;
      }

      snapshot.forEach(doc =>
      {
        let product = doc.data();
        context.commit("SET_SINGLE_PRODUCT_DATA", product);
      })
    })
    .catch(err =>
    {
      console.log('Error getting documents', err);
    });
}
