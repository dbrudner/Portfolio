import React from 'react'
import styled from 'styled-components'

import Card from './card'

import hearthsearch from '../images/project/hearthsearch.png'
import csgo from '../images/project/csgo.png'
import crypto from '../images/project/crypto.png'
import wallpapers from '../images/project/wallpapers.png'
import {Row, Col, Grid} from 'react-bootstrap'
import projects from './project-objects'

export default function Projects() {

    const Projects = styled.div`
        margin-bottom: 20rem;
    `

    return (
        <Projects>
            <Grid>
                <Row>
                    <Col className='no-padding' md={6} xs={12} lg={3}>
                        <Card odd img={hearthsearch} info={projects.hearthsearch}/>
                    </Col>
                    <Col className='no-padding' md={6} xs={12} lg={3}>
                        <Card img={csgo} info={projects.csgo} />
                    </Col>
                    <Col className='no-padding' md={6} xs={12} lg={3}>                    
                        <Card bottom odd img={wallpapers} info={projects.wallpapers}/>
                    </Col>
                    <Col className='no-padding' md={6} xs={12} lg={3}>
                        <Card bottom img={crypto} info={projects.bitcoin}/>
                    </Col>                                     
                </Row>
            </Grid>
        </Projects>
    )
}