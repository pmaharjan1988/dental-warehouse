export function user(state)
{
  return state.user
}

export function getEnqFormShowStatus(state)
{
  return state.enq_form_show;
}

export function getEnqFormSubmittedStatus(state)
{
  return state.enq_form_submitted;
}

export function getCartItems(state)
{
  return state.cart
}

export function getCartCount(state)
{
  return state.cart.length
}

export function getProductTotal(state)
{
  let cartItems = state.cart;
  let total = 0;
  if (cartItems.length > 0)
  {

    let sum = cartItems
      .map(item => item.price)
      .reduce((prev, curr) => prev + curr, 0);
    console.log(sum);

    total = sum;
  }
  return total;
}
