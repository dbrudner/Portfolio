import React from 'react'
import styled from 'styled-components'

import Card from './card'

import hearthsearch from '../images/project/hearthsearch.png'
import csgo from '../images/project/csgo.png'
import crypto from '../images/project/crypto.png'
import wallpapers from '../images/project/wallpapers.png'

export default function Projects() {

    const Projects = styled.div`
        margin: 3rem;
        margin-bottom: 50rem;

        div {
            width: 100%;
        }

        
    `

    return (
        <Projects>
            <Card odd img={hearthsearch} />
            <Card img={csgo} />
            <Card bottom odd img={wallpapers} />
            <Card bottom img={crypto} />
        </Projects>
    )
}