import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;

	const publishableKey = 'pk_test_VJW3dPmQ378iBuPZb2bOHx1p00jxa8D2DR';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}
	return (
   <StripeCheckout
   		label="Pay Now"
   		name="CSHB Clothing"
   		billingAddress
   		shippingAddress
   		image='https://podcasts-player.herokuapp.com/static/carlos.jpg'
   		amount={priceForStripe}
   		panelLabel="Pay Now"
   		token={onToken}
   		stripeKey={publishableKey}/>
	)
}

export default StripeCheckoutButton;