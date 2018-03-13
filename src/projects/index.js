import React from 'react'
import styled from 'styled-components'

import Card from './card'

import hearthsearch from '../images/project/hearthsearch.png'
import csgo from '../images/project/csgo.png'
import crypto from '../images/project/crypto.png'
import wallpapers from '../images/project/wallpapers.png'
import {Row, Col, Grid} from 'react-bootstrap'

export default function Projects() {

    const Projects = styled.div`
        margin-bottom: 50rem;
    `

    return (
        <Projects>
            <Grid>
                <Row>
                    <Col className='no-padding' lg={3}>
                        <Card odd img={hearthsearch} />
                    </Col>
                    <Col className='no-padding' lg={3}>
                        <Card img={csgo} />
                    </Col>
                    <Col className='no-padding' lg={3}>                    
                        <Card bottom odd img={wallpapers} />
                    </Col>
                    <Col className='no-padding' lg={3}>
                        <Card bottom img={crypto} />
                    </Col>                                     
                </Row>
            </Grid>
        </Projects>
    )
}