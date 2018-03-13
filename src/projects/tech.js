import React from 'react'
import styled, {keyframes} from 'styled-components'

export default function Tech(props) {

    const fadeIn = keyframes`
        from {
            transform: scale(.25);
            opacity: 0;
        }

        to {
            transform: scale(1);
            opacity: 1;
        }
    `

    const fadeOut = keyframes`
        from {
            transform: scale(1);
            opacity: 0;
        }

        to {
            transform: scale(.25);
            opacity: 1;
        }
    `

    const Tech = styled.div`
        font-size: 1.8rem;
        color: white;
        position: relative;
        z-index: 100;
        font-family: lato;
        margin-left: 1rem
        text-align: center;
        animation: ${fadeIn} 1s;
        
    `

    return (
        <Tech>
            Some tech and other tech
        </Tech>
    )
}