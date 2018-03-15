import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive';

import Nav from './nav'
import MobileNav from './mobile-nav'


export default function NavMain() {

    return (
        <div>
            <MediaQuery minDeviceWidth={1700}>
                <Nav />
            </MediaQuery>
            <MediaQuery laptop minDeviceWidth={701} maxDeviceWidth={1699}>
                <Nav />
            </MediaQuery>
            <MediaQuery maxDeviceWidth={700}>
                <MobileNav />
            </MediaQuery>
        </div>
    )
}