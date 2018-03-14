import React, {Component} from 'react'
import styled from 'styled-components'

import MoreInfo from './more-info'
import LinkButton from './link-button'

export default class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showMoreInfo: true,
            showLinks: false
        }
    }

    showLinks = () => {
        this.setState({showLinks: true})
    }

    showMoreInfo = () => {
        console.log('show')
        // this.setState({showMoreInfo: true})
    }

    hideMoreInfo = () => {
        console.log('hide')

        // this.setState({showMoreInfo: false})
    }

    render() {
        const Card = styled.div`
            position: relative;
            display: block;
            cursor: pointer;

            img {
                position: relative;
                z-index: 1;
                opacity: .3;
                transition: all .3s;
                width: 100%;
                &:hover {

                    position: relative;
                    display: block;
                    opacity: 0;
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
            <Card onClick={this.showLinks} odd={this.props.odd}>
                <img src={this.props.img} onMouseEnter={() => {this.showMoreInfo()}} />
                <MoreInfoContainer onMouseLeave={() => {this.hideMoreInfo()}} >
                    {this.state.showMoreInfo ? <MoreInfo info={this.props.info}/> : null}
                </MoreInfoContainer>
                
                <Links>
                    {this.state.showLinks ? <LinkButton/> : null}
                </Links>
            </Card>
        )
    }


}