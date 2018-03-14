import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-bootstrap'

import SubHeader from '../general-components/sub-header'
import ContactText from './contact-text'
import Links from './links'

export default function Contact() {

    const Contact = styled.div`
        background-color: black;
        padding: 10rem 20% 20rem 20%;
    `
    
    return (
        <Contact>
            <SubHeader text='Contact' />
                <Grid>
                    <Row>
                        <Col lg={6} md={12}>
                            <ContactText/>
                        </Col>
                        <Col lg={6} md={12}>
                            <Links/>
                        </Col>
                    </Row>
                </Grid>
        </Contact>
    )
}