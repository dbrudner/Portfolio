import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive';

import Nav from './nav'
import MobileNav from './mobile-nav'


export default function NavMain() {

    return (
        <div>
            <MediaQuery minDeviceWidth={701}>
                <Nav />
            </MediaQuery>
            
            <MediaQuery maxDeviceWidth={700}>
                <MobileNav />
            </MediaQuery>
        </div>
    )
}