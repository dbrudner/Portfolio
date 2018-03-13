import React from 'react'
import Nav from '../nav'
import styled from 'styled-components'

export default function Header() {

    const Div = styled.div`
        height: 100vh;
        background-color: #2098D1;
    `

    return (
        <Div>
            <Nav/>
        </Div>
    )
}