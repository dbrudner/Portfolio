import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import img from '../images/me_party_hat.jpg'
import Scroll from 'react-scroll';

export default class Nav extends Component {

    findHeight = () => {
        console.log(window.innerHeight)
    }

    scroll = number => {
        Scroll.animateScroll.scrollTo(number)
    }

    scrollToBottom = () => {
        Scroll.animateScroll.scrollToBottom();
    }

    render() {

        const slideUp = keyframes`
        from {
                transform: translateY(-1.5rem);
                opacity: 0;
            }

            to {
                transform: translateY(0rem);
                opacity: 1;
            }
        `;

        const slideInLeft = keyframes`
            from {
                transform: translateX(-1.5rem);
                opacity: .5;
            }

            to {
                transform: translateX(0rem);
                opacity: 1;
            }
        `

        const Ul = styled.ul`
            display: inline-block;
            margin-top: 3.5rem;
        `

        const Nav = styled.nav`
            color: white;
            font-family: 'Lato', sans-serif;
            font-size: 2rem;
            display: flex;
            justify-content: space-between;
            padding: 0 20%;
            border-bottom: 3px solid #f3f3f3;
            height: 10rem;

            li {
                display: inline-block;
                margin-left: 4rem;
                text-transform: uppercase;
                cursor: pointer;
                transform: translateY(0rem);
                transition: all .3s;
            }

            li:nth-child(1) {
                animation: ${slideInLeft} 1s;
            }

            li:nth-child(2) {
                animation: ${slideInLeft} 1s;
                animation-delay: .15s
                
            }

            li:nth-child(3) {
                animation: ${slideInLeft} 1s;
                animation-delay: .3s                
            }

            li:hover {
                transform: translateY(-1rem);
                transition: all .3s;
            }

            @media only screen and (max-width: 1074px) {
                padding: 0 4%;
            }
        `

        const Brand = styled.div`
            display: flex;
            margin-top: 2.4rem;
            animation: ${slideUp} 1s;
        `

        const BrandHeader = styled.div`

            h4 {
                margin: 0
                text-transform: uppercase;
            }
        `

        const BrandDescription = styled.div`

            p {
                margin: 1rem 0 0 0;
                font-size: 1.6rem;
            }
        `
        const BrandImage = styled.div`
            margin-right: 1rem;
        `

        const iconStyle = {
            fontSize: '5.5rem'
        }

        return (
            <Nav>
                <Brand>
                    <BrandImage>
                        <i style={iconStyle} className="fab fa-gg-circle"></i>
                    </BrandImage>
                    <div>
                        <BrandHeader>
                            <h4>Dave Brudner</h4>
                        </BrandHeader>
                        <BrandDescription>
                            <p>Full Stack Web Developer</p>
                        </BrandDescription>
                    </div>
                </Brand>
                <Ul>
                    <li onClick={() => {this.scroll(this.props.laptop ? 1500 : 2200)}}>About</li>
                    <li onClick={() => {this.scroll(this.props.laptop ? 700 : 1000)}}>Portfolio</li>
                    <li onClick={() => {this.scrollToBottom()}}>Contact</li>
                </Ul>
            </Nav>
        )
    }


}