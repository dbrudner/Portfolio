import React from 'react'
import styled from 'styled-components'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'


export default function Links() {

    const Links = styled.div`
        display: flex;

        div {
            cursor: pointer;
            flex-grow: 1;
            display: inline-block;
            width: 18rem;
            height: 4.5rem;
            font-family: lato;
            font-size: 2rem;
            border-radius: 5px;
            background-color: white;
            text-align: center;
            padding-top: 7px;
            margin-right: 1rem;

            img {
                width: 25px;
                height: 25px;
            }
        }
    `

    const GitHub = styled.div`
        
    `

    const LinkedIn = styled.div`
    `

    const Gmail = styled.div`
    `

    return (
        <Links>
            <GitHub>
                GitHub
            </GitHub>
            <LinkedIn>
                LinkedIn
            </LinkedIn>
            <Gmail>
                Gmail
            </Gmail>
        </Links>
    )

}