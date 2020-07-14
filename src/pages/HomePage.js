import React from 'react';

import Hero from '../components/Hero';

export default function HomePage(props) {
    return (
        <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
    )
}
