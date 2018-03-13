import React from 'react'
import styled from 'styled-components'

import Nav from '../nav'
import Banner from './banner'

export default function Header() {

    const Div = styled.div`
        height: 66vh;
        background-color: #2098D1;
    `

    return (
        <Div>
            <Nav/>
            <Banner/>
        </Div>
    )
}