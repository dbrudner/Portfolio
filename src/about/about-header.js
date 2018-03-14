import React from 'react'
import styled from 'styled-components'

export default function AboutHeader() {

    const AboutHeader = styled.div`
    
        h2 {
            text-align: center;
            text-transform: uppercase;
            font-size: 3.6rem;
            letter-spacing: 2rem;
            color: #2098D1;
        }
    `

    const HR = styled.hr`
        margin-top: 8rem;
    `

    return (
        <AboutHeader>
            <h2>About</h2>
            <HR/>
        </AboutHeader>
    )
}