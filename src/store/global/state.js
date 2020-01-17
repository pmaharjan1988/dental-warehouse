export default function()
{

  return {
    cart: [],
    user:
    {
      loggedIn: false,
      data: null,
    },
    enq_form_show: true,
    enq_form_submitted: false,

    cart_item:
    {
      'id': '',
      'name': ''
    }
  }
}
