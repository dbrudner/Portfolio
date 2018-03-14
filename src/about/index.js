import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-bootstrap'

import ImageCluster from './image-cluster'
import AboutText from './about-text'

export default function About() {

    const About = styled.div`
        margin-bottom: 100rem;

    `

    return (
        <About>
            <Grid>
                <Row>
                    <Col lg={6}>
                        <ImageCluster/>
                    </Col>
                    <Col lg={6}>
                        <AboutText />
                    </Col>
                </Row>
            </Grid>
        </About>
    )
}