import React from 'react'
import styled from 'styled-components'
import me from '../images/me.jpg'

export default function Banner() {

    const Banner = styled.div`
        font-family: lato
        color: white;
        padding-top: 20rem;
        text-align: center;
        font-weight: 400;


        h1 {
            font-size: 4.2rem;
            font-weight: 400;
            margin: 0;
            margin-bottom: 1rem;

        }

        h5 {
            font-size: 2.2rem;
            font-weight: 400;
            margin: 0;
        }
    `

    const Header = styled.div`
    `

    const ViewPortfolio = styled.div`
        text-transform: uppercase;
        margin-top: 5rem;
        font-size: 1.7rem;
        font-weight: 700;

        div {
            display: inline-block;
            cursor: pointer;
        }

        div:hover {

            div {
                color: black;
                transition: all .3s;
            }

            icon {
                transform: translateY(1rem);
                color: black;
                transition: all .3s;
            }
        }

        icon {
            display: block;
            transform: translateY(0rem);
            transition: all .3s;
        }


    `

    return (
        <Banner>
            <Header>
                <h1>Full Stack Web Developer</h1>
                <h5>Creating intelligently written component-based web applications</h5>
                <ViewPortfolio>
                    <div>
                        <div>View Portfolio</div>
                        <icon>
                            <i className="fas fa-chevron-down"></i>
                        </icon>
                    </div>
                </ViewPortfolio>
            </Header>
        </Banner>
    )
}