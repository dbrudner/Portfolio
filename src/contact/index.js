import React from 'react'
import styled from 'styled-components'
import {Grid, Row, Col} from 'react-bootstrap'

import SubHeader from '../general-components/sub-header'
import ContactText from './contact-text'
import Links from './links'

export default function Contact() {

    const Contact = styled.div`
        background-color: black;
        padding: 10rem 20% 10rem 20%;

        @media only screen and (max-width: 768px) {
            padding: 10rem 4%;
        }
    `

    const ContactBody = styled.div`
        margin-top: 10rem;
        text-align: center;
    `
    
    return (
        <Contact>
            <SubHeader text='Contact' />
                <ContactBody>
                    <ContactText/>
                    <Links/>
                </ContactBody>
        </Contact>
    )
}