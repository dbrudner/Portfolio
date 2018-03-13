import React, {Component} from 'react'
import styled from 'styled-components'

import Tech from './tech'

export default class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showTech: false
        }
    }

    showTech = () => {
        console.log('show')
        this.setState({showTech: true})
    }

    hideTech = () => {
        console.log('hide')
        
        this.setState({showTech: false})
    }

    render() {
        const Card = styled.div`
            position: relative;
            display: block;
            margin-left: 33.3%;
            margin-top: 3rem;

            img {
                position: relative;
                width: 33.3%;
                cursor: pointer;
                z-index: 1;
                opacity: .2;
                transition: all .3s;                

                &:hover {
                    
                    position: relative;                
                    display: block;
                    opacity: 0;
                    transition: all .3s;
                }
            }

            :before {
                cursor: pointer;
                content: " ";
                height: 100%;
                width: 33.3%;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 1);
            }
        `
        const TechContainer = styled.div`
            position: absolute;
            top: 0;
            left: 0;
            width: 33% !important;
        `

        return (
            <Card odd={this.props.odd}>
                <img src={this.props.img} onMouseLeave={() => {this.hideTech()}} onMouseEnter={() => {this.showTech()}} />
                <TechContainer>
                    {this.state.showTech ? <Tech /> : null}
                </TechContainer>
            </Card>
        )
    }

    
}