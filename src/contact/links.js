import React from 'react'
import styled from 'styled-components'

import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import email from '../images/email.svg'

export default function Links() {

    const Links = styled.div`
        display: flex;
        width: 12rem;
        margin: 2rem auto;

        div {
            cursor: pointer;
            display: inline-block;
            height: 4.5rem;
            font-family: lato;
            font-size: 2rem;
            border-radius: 5px;
            text-align: center;
            padding-top: 7px;
            margin-right: 1rem;


            img {
                width: 25px;
                height: 25px;
                color: white;
            }
        }
    `

    const GitHub = styled.div`

    `

    const LinkedIn = styled.div`
    `

    const Email = styled.div`
    `

    return (
        <Links>
            <GitHub>
                <img src={github} />
            </GitHub>
            <LinkedIn>
                <img src={linkedin} />
            </LinkedIn>
            <Email>
                <img src={email} />
            </Email>
        </Links>
    )

}