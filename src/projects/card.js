import React from 'react'
import styled from 'styled-components'

export default function Card(props) {



    const Card = styled.div`
        position: relative;
        display: block; 
        margin-left: ${props => props.odd ? '60.1%' : '0'};            
        margin-right: ${props => !props.odd ? '50%' : '0'};    

        img {
            grid-template-columns: auto auto; 
            z-index: 1;
            width: 40%;
        }  

        :after {                                
            content: " ";
            height: 100%;
            width: 40%;
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.5);
        }

    `

    return (
        <Card odd={props.odd}>
            <img src={props.img} />
        </Card>
    )
}