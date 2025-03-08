const stripe = Stripe('pk_test_51QxxWAR9X6AUPvR9w4D4vWsQtqB2eW5GK8a7YIyJeJsqFSfE0V0IAVB7dITX9G7udAMpJf2sf9TmAivgd2WPxnc300rQ8lARtz');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});