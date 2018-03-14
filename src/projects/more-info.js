import React from 'react'
import styled, {keyframes} from 'styled-components'

export default function MoreInfo(props) {
    console.log(props.info)

    const renderList = items => {
        return items.map(item => {
            return (
                <li>
                    {item}
                </li>
            )
        })
    }

    const fadeIn = keyframes`
        from {
            transform: scale(.85);
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

    const MoreInfo = styled.div`
        color: white;
        z-index: 100;
        font-family: lato;
        animation: ${fadeIn} 1s;
    `

    const Name = styled.div`
        text-align: center;
        margin-top: 3rem;
        width: 100%;
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: .5rem;

        a {
            color: #f3f3f3;
            cursor: pointer;
        }
    `

    const Features = styled.ul`
        color: rgb(144,144,144);
        opacity: .5;     
        font-size: 1.6rem;
        
    `

    const Tech = styled.ul`
        list-style: none;
        text-align: center;
        padding-left: 0;
        margin-top: 2rem;

        li {
            display: inline;
            margin-left: 1rem;
            text-transform: uppercase;
            color: #2098D1;

            &:first-child {
                margin-left: 0;
            }
        }

    `

    const Hr = styled.hr`
        width: 50%;
        border-color: #3f3f3f; 
    `
    

    return (
        <MoreInfo>
            <Name>
                <a href={props.info.link}>{props.info.name}</a>
            </Name>
            <Tech>
                {renderList(props.info.tech)}
            </Tech>
            <Features>
                {renderList(props.info.features)}
            </Features>
        </MoreInfo>
    )
}