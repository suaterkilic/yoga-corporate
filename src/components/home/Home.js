import React from 'react';
import Header from '../partials/Header';
import Hero from '../hero/Hero';
import YogaStyles from '../yogastyles/YogaStyles';
import References from '../references/References';
import Adventure from '../adventure/Adventure';
import Footer from '../partials/Footer';
const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <YogaStyles />
            <References />
            <Adventure />
            <Footer />
        </React.Fragment>
    )
}

export default Home;

