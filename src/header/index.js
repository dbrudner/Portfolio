import React from 'react'
import Nav from '../nav'
import styled from 'styled-components'
import img from '../images/keyboard.jpg'

export default function Header() {

    const Div = styled.div`
        height: 50vh;
        background-image: url(${img});
        background-size: cover;
        opacity: .4;
        background-position: center;
    `

    return (
        <Div>
            <Nav/>
        </Div>
    )
}