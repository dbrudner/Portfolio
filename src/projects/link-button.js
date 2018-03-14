import React from 'react'
import styled from 'styled-components'

export default function LinkButton() {

    const Button = styled.button`
        position: relative;
        z-index: 1000;
    `

    return (
        <Button>Button</Button>
    )
}