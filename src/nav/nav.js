import React from 'react'
import styled from 'styled-components'


export default function Nav() {

    const Ul = styled.ul`
        display: inline-block;
    `

    const Nav = styled.nav`
        background-color: red;
    `

    const Li = styled.li`
        display: inline;
    `


    return (
        <Nav>
            <Ul>
                <Li>Port</Li>
                <Li>Flo</Li>
                <Li>Yo</Li>
            </Ul>
        </Nav>
                
    )
}