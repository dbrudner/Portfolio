import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-bootstrap'

import ImageCluster from './image-cluster'
import AboutText from './about-text'
import AboutHeader from './about-header'

import me from '../images/me.jpg'
import zbar from '../images/cat1.png'
import chilpo from '../images/chilpo2.jpg'
import okinawa from '../images/okinawa.jpg'
import hotburger from '../images/hotburger.jpg'

import text from './text'

export default function About() {

    console.log(text)

    const About = styled.div`
        margin-bottom: 100rem;
        margin-left: 20%;
        margin-right: 20%;
    `

    const AboutTextCntr = styled.div`
        margin-top: 13rem;
    `

    return (
        <About>
            <AboutHeader/>
            <Grid>
                <Row>
                    <Col md={12} lg={6}>
                        <ImageCluster img1={zbar} img2={me} img3={okinawa}/>
                    </Col>
                    <div>
                    </div>
                    <Col md={12} lg={6}>
                        <AboutTextCntr>
                            <AboutText paragraph1={text.paragraph1} paragraph2={text.paragraph2} paragraph3={null}/>
                        </AboutTextCntr>                        
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={12}>
                        <AboutText paragraph1={text.paragraph3} paragraph2={text.paragraph4} paragraph3={text.paragraph5}/>
                    </Col>
                </Row>
            </Grid>
        </About>
    )
}