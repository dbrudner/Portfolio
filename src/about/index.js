import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-bootstrap'

import ImageCluster from './image-cluster'
import AboutText from './about-text'
import SubHeader from '../general-components/sub-header'

import me from '../images/me.jpg'
import zbar from '../images/cat1.png'
import chilpo from '../images/chilpo2.jpg'
import okinawa from '../images/okinawa.jpg'
import hotburger from '../images/hotburger.jpg'

import text from './text'

export default function About() {

    const About = styled.div`
        margin-bottom: 20rem;
        margin-left: 20%;
        margin-right: 20%;

        @media only screen and (max-width: 2200px) {
            margin-left: 8%;
            margin-right: 8%;
        }
}
    `

    const AboutTextCntr = styled.div`
        margin-top: 6rem;
    `

    const Img = styled.div`
        img {
            margin-top: 3rem;
            margin-left: 33%;
            width: 33%;
            border-radius: 20px;
            box-shadow: 0 1.5rem 4rem rgb(11.2%, 11.2%, 11.2%);
        }   
    `

    const AboutText2 = styled.div`
        margin-top: 8rem;
    `

    const Header = styled.div`
    `

    return (
        <About>
            <Header>
                <SubHeader text='About'/>
            </Header>
            <Grid>
                <Row>
                    <Col md={12} lg={12}>
                        <Img>
                            <img src={me} />
                        </Img>
                    </Col>
                    <div>
                    </div>
                    <Col md={12} lg={12}>
                        <AboutTextCntr>
                            <AboutText paragraph1={text.paragraph1} paragraph2={text.paragraph2} paragraph3={null}/>
                        </AboutTextCntr>                        
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={12}>
                        <AboutText2>
                            <AboutText paragraph1={text.paragraph3} paragraph2={text.paragraph4} paragraph3={text.paragraph5}/>
                        </AboutText2>
                    </Col>
                </Row>
            </Grid>
        </About>
    )
}