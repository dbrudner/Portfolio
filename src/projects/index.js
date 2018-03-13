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
        display: grid;
        grid-template-columns: auto auto;

        div {
            width: 100%;
        }

        
    `

    return (
        <Projects>
            <div>            
                <Card odd img={hearthsearch} />
            </div>    
            <div>
                <Card img={csgo} />
            </div>
            <div>
                <Card odd img={wallpapers} />
            </div>
            <div>
                <Card img={crypto} />
            </div>     
        </Projects>
    )
}