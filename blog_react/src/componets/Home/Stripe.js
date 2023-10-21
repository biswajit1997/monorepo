import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Stripe = () => {
  let history = useHistory();

  const onToken = (token) => {
    console.log(token);

    const id = localStorage.getItem("id");
    axios
      .post("https://devawstest.in.net/api/stripe", { id })
      .then(function (response) {
        console.log(response.data);
        history.push("/home");
      })
      .catch(function (error) {
        console.error(error.message);
      });
  };

  return (
    <StripeCheckout
      token={onToken}
      amount={100000}
      currency="INR"
      stripeKey="pk_test_51HgpZYBnx8e6AZN4k6CZJsf26GxX7zF9iO0glUZUgyiMyRnbigcaRC7Yi0TNaP9GLDDq3goleH5Q9ut8pbbgO2gs005KMa1h5h"
    />
  );
};
export default Stripe;
