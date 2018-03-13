import React from 'react'
import styled from 'styled-components'

import Card from './card'
import Header from './header'

import javascript from '../images/javascript.png'
import node from '../images/node.png'
import reactImg from '../images/react.png'
import mongo from '../images/mongo.png'

export default function TechStack() {
    
    const TechStack = styled.div`
        height: 66vh;
    `

    const CardContainer = styled.div`
        display: flex;
        margin: 0 20%;
        position: static;
    `

    return (
        <TechStack>
            {/* <Header /> */}
            <CardContainer>
                <Card img={javascript}/>
                <Card img={node}/>
                <Card img={reactImg}/>
                <Card img={mongo}/>
            </CardContainer>            
        </TechStack>
    )
}