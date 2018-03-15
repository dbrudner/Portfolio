import React from 'react'
import styled from 'styled-components'

export default function SubHeader(props) {

    const SubHeader = styled.div`

        h2 {
            text-align: center;
            text-transform: uppercase;
            font-size: 3.6rem;
            letter-spacing: 2rem;
            color: #2098D1;
            margin-left: 2rem;
        }
    `

    const HR = styled.hr`
        margin-top: 8rem;
    `

    return (
        <SubHeader>
            <h2>{props.text}</h2>
            {props.noHr ? null : <HR/>}
        </SubHeader>
    )
}