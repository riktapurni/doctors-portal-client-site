import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51KSikLHSv8qtD2gTlTVtHV3hwY6dC9J4Ua0BWEEZY0hk2Wgb9sruNqvimSElv7IL31xSPsgW7dMEVChX27soYt8v00mjRciLUD');
const Payment = () => {
    const {appointmentId} = useParams(); //specific id dhorar jonno
    const [appointment, setAppointment] = useState({});
    useEffect(()=>{
        fetch(`https://gentle-falls-83113.herokuapp.com/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>please pay for {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>pay : ${appointment.price}</h4>
            {appointment?.price &&<Elements stripe={stripePromise}>
            <CheckoutForm 
            appointment = {appointment}
            />
            </Elements>
            }
        </div>
    );
};

export default Payment;
/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-----
5. Create payment method
6. server: create payment Intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error
*/