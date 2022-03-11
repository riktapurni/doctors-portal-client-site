import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
 import ExceptionalCare from '../ExceptionalCare/ExceptionalCare';
 import Testimonial from '../Testimonial/Testimonial';
import Doctors from '../Doctors/Doctors';
 

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ExceptionalCare></ExceptionalCare>
            <AppointmentBanner></AppointmentBanner>
           <Testimonial></Testimonial>
           <Doctors></Doctors>
        </div>
    );
};

export default Home;