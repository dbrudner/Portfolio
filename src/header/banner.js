import React from 'react'
import styled, {keyframes} from 'styled-components'
import me from '../images/me.jpg'
import Scroll from 'react-scroll';

export default function Banner(props) {

    const scrollDown = () => {
        Scroll.animateScroll.scrollTo(props.mobile ? 600 : 1000)
    }

    const slideDown = keyframes`
        from {
            transform: translateY(1.5rem);
            opacity: 0;
        }

        to {
            transform: translateY(0rem);
            opacity: 1;
        }
    `;

    const slideUp = keyframes`
        from {
            transform: translateY(-1.5rem);
            opacity: 1;
        }

        to {
            transform: translateY(0rem);
        }
    `;

    const Banner = styled.div`
        font-family: lato
        color: white;
        padding-top: 13%;
        text-align: center;
        font-weight: 400;


        h1 {
            font-size: 4.2rem;
            font-weight: 400;
            margin: 0;
            margin-bottom: 1rem;
            animation: ${slideUp} 1s;
        }

        h5 {
            font-size: 2.2rem;
            font-weight: 400;
            margin: 0;
            animation: ${slideUp} 1s;
        }
    `

    const Header = styled.div`
    `

    const ViewPortfolio = styled.div`
        animation: ${slideDown} 1s;
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
                    <div onClick={() => scrollDown()}>
                        <div>View Portfolio</div>
                            <icon className='icon'>
                                <i className="fas fa-chevron-down"></i>
                            </icon>
                    </div>
                </ViewPortfolio>
            </Header>
        </Banner>
    )
}