import React from 'react'
import styled from 'styled-components'

export default function Card(props) {

    const Card = styled.div`        
        
        flex-grow: 1;

        div {
        }

        img {
            width: 15rem;
            height: 15rem;
            margin: 0 auto;
            display: block;
        }
        
        :last-child {
            margin-right: 0;
        }
    `

    return (
        <Card>
            <div>
                <img src={props.img} />
            </div>
        </Card>
    )
}