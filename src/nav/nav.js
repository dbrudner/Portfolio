import React from 'react'
import styled from 'styled-components'
import img from '../images/me_party_hat.jpg'

export default function Nav() {

    const Ul = styled.ul`
        display: inline-block;
        margin-top: 3.5rem;
    `

    const Nav = styled.nav`
        color: white;
        font-family: 'Lato', sans-serif;
        font-size: 2rem;
        display: flex;
        justify-content: space-between;
        padding: 0 20%;
        border-bottom: 3px solid #f3f3f3;
        height: 10rem;
    `

    const Li = styled.li`
        display: inline;
        margin-left: 4rem;
    `

    const Brand = styled.div`
        display: grid;
        grid-template-columns: 10rem 20rem;
        margin-top: 2.4rem;
    `

    const BrandHeader = styled.div`
        h4 {
            margin: 0
            text-transform: uppercase;
        }
    `

    const BrandDescription = styled.div`
        p {
            margin: 1rem 0 0 0;
            font-size: 1.6rem;
        }
    `
    const BrandImage = styled.div`
        div {
            margin-left: 3.5rem;
        }
    ` 
    const iconStyle = {
        fontSize: '5.5rem'
    }

    return (
        <Nav>
            <Brand>
                <BrandImage>
                    <div>
                        <i style={iconStyle} className="fab fa-gg-circle"></i>
                    </div>
                </BrandImage>
                <div>
                    <BrandHeader>
                        <h4>Dave Brudner</h4>
                    </BrandHeader>
                    <BrandDescription>
                        <p>Full Stack Web Developer</p>
                    </BrandDescription>
                </div>
            </Brand>
            <Ul>
                <Li>About</Li>
                <Li>Portfolio</Li>
                <Li>More</Li>
            </Ul>
        </Nav>
                
    )
}