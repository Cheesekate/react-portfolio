import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About/About';

export default function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <About />


        </div>
    )
}
