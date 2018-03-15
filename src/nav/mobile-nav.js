import React from 'react'
import styled from 'styled-components'
import img from '../images/me_party_hat.jpg'

import Scroll from 'react-scroll';

export default function MobileNav(props) {

    const scroll = number => {
        Scroll.animateScroll.scrollTo(number)
    }

    const scrollToBottom = () => {
        Scroll.animateScroll.scrollToBottom();
    }

    const Ul = styled.div`
        display: flex;
        justify-content: space-between; 
        width: 100%;
        margin: 4rem 8% 0 3.5rem;

        div {
            display: inline-block;
            text-transform: uppercase;
            cursor: pointer;
            transform: translateY(0rem);
            transition: all .3s
            font-size: 1.6rem;
        }

        div:hover {
            transform: translateY(-1rem);
            transition: all .3s;
        }
    `

    const Nav = styled.nav`
        color: white;
        font-family: 'Lato', sans-serif;
        font-size: 2rem;
        display: flex;
        justify-content: space-between;
        padding: 0 0%;
        border-bottom: 3px solid #f3f3f3;
        height: 10rem;

        

        @media only screen and (max-width: 768px) {
            padding: 0 0%;
        }
    `

    return (
        <Nav>
            <Ul>
                <div onClick={() => {scroll(2400)}}>About</div>
                <div onClick={() => {scroll(600)}}>Portfolio</div>
                <div onClick={() => {scrollToBottom()}}>Contact</div>
            </Ul>
        </Nav>
                
    )
}