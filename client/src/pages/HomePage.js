import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

export default function HomePage(props) {
    return (
        <React.Fragment>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </React.Fragment>
    )
}
