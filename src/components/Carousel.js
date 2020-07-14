import React from 'react';

import behave from '../assets/images/behave.jpeg';
import responsiveport from '../assets/images/responsiveport.jpeg';
import music from '../assets/images/music.jpeg';


class Carousel extends React.Component() {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'BeHave',
                    subTitle: 'Social Media to be Kind',
                    imgSrc: behave,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Responsive Portfolio',
                    subTitle: 'Built with Copy Paste',
                    imgSrc: responsiveport,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project 2 ',
                    subTitle: 'Does it work? Kinda',
                    imgSrc: music,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }

}

render() {
    return (
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
}

}

export default Carousel;