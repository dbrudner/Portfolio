import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive';

import Nav from '../nav'
import Banner from './banner'

export default function Header() {

    const Div = styled.div`
        height: 90vh;
        background-color: #2098D1;
    `

    return (
        <Div>
            <Nav/>
            <MediaQuery minDeviceWidth={701}>
                <Banner />
            </MediaQuery>            
            <MediaQuery maxDeviceWidth={700}>
                <Banner mobile/>
            </MediaQuery>
        </Div>
    )
}