import React from 'react'
import styled from 'styled-components'

export default function Header() {

    const Header = styled.div`
        div {
            font-size: 3.6rem;
            text-align: center;
            font-family: lato;
        }
    `

    return (
        <Header>
            <div>Knowledge & Skills</div>
        </Header>
    )
}