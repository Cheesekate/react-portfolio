import React from 'react';

import Card from './Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';


import behave from '../images/behave.jpeg';
import responsiveport from '../images/responsiveport.jpeg';
import music from '../images/music.jpeg';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Note Taker',
                    subTitle: 'Take Notes and save them on refresh',
                    imgSrc: behave,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Responsive Portfolio',
                    subTitle: 'Built with Copy Pasteewfwewef',
                    imgSrc: responsiveport,
                    link: 'https://www.youtube.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Project 2 ',
                    subTitle: 'Does it work? Kindwefwfweawe,mewjknfwkjn fhuhf Built using MySQL db ',
                    imgSrc: music,
                    link: 'https://www.youtube.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Project 3 ',
                    subTitle: 'BeKindwefweewefeww',
                    imgSrc: music,
                    link: 'https://www.youtube.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Search HW',
                    subTitle: 'Does it work? Kinda',
                    imgSrc: music,
                    link: 'https://www.youtube.com/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Search HW',
                    subTitle: 'Does it work? Kinda',
                    imgSrc: music,
                    link: 'https://www.youtube.com/',
                    selected: false
                },
            ]
        }
    }



    handleCardClick = (id, card) => {

        let items = [...this.state.items];


        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
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