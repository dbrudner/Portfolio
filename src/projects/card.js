import React, {Component} from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'

import MoreInfo from './more-info'
import LinkButton from './link-button'

export default class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showMoreInfo: false,
            showLinks: false
        }
    }

    showLinks = () => {
        this.setState({showLinks: true}
    )}

    showMoreInfo = () => {
        this.setState({showMoreInfo: true}
    )}

    hideMoreInfo = () => {
        this.setState({showMoreInfo: false}
    )}

    render() {
        const Card = styled.div`
            position: relative;
            display: block;
            cursor: pointer;

            img {
                position: relative;
                z-index: 1;
                opacity: .01;
                transition: all .3s;
                width: 100%;
                &:hover {

                    position: relative;
                    display: block;
                    opacity: 0.3;
                    transition: all .3s;
                    
                }
            }

            :before {
                content: " ";
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 1);
            }
        `
        const MoreInfoContainer = styled.div`
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
        `

        const Links = styled.div`
            position: absolute;
            top: 90%;
            z-index: 1000;
        `

        return (
            <a href={this.props.info.link} target='_blank'>
                <Card odd={this.props.odd}>
                    <img src={this.props.img} />
                    
                    <MoreInfoContainer>
                        <MoreInfo info={this.props.info}/ >
                    </MoreInfoContainer>
                </Card>
            </a>
        )
    }


}