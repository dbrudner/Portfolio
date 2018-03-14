import React from 'react'
import styled from 'styled-components'

export default function(props) {

    console.log(props)

    const About = styled.div`
        font-family: lato;

    `

    const AboutHeader = styled.h1`
        font-size: 3.6rem;
        text-transform: uppercase;
    `

    const AboutDescription = styled.div`
        p {
            line-height: 4rem;
            text-indent: 4rem;
            font-size: 2rem;
            color: #5b5b5b;            
        }
    `

    return (
        <About>
            <AboutDescription>
                <p>
                    <strong>{props.paragraph1}</strong>
                </p>
                <p>
                    {props.paragraph2}
                </p>
                <p>
                    {props.paragraph3}
                </p>
            </AboutDescription>
        </About>
    )
}