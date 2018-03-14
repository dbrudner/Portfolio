import React from 'react'
import styled from 'styled-components'

export default function() {

    const About = styled.div`
        margin-left: 10%;
        margin-right: 10%;

    `

    const AboutHeader = styled.h1`
        font-size: 3.6rem;
        text-transform: uppercase;

    `

    const AboutDescription = styled.div`
        p {
            line-height: 4rem;
            text-indent: 4rem;
        }
    `

    return (
        <About>
            <AboutHeader>
                About
            </AboutHeader>
            <AboutDescription>
                <p>
                        I'm a 29 year old man hyper obssessed with cats and coding. I started teaching myself HTML, CSS, and JavaScript in September 2017 while I was living in Korea after teaching English for 3 years.
                </p>
                <p>
                    After looking for careers that offer remote work opportunities, I stumbled on web development. After a few weeks of frustration learning basic computer science concepts, things slowly started clicking. I've since come a long way, and while I still have dreams of working remotely while living abroad in the future, right now, I want to learn as much as I can about programming, which I've come to love more than anything.
                </p>
                <p>
                    I attended a bootcamp at Rutgers University from October 2017 until the end of February 2018. While there, I learned a lot and found a community of similar minded people. I often found myself finishing projects and homework as quickly and completely as I could because I wanted to learn more on my own. I'd wake up early in the morning before class and solve algorithms on codewars.com and stay up late at night watching udemy and youtube courses and applying what I learned in various side projects.
                </p>
                <p>
                    When not programming, I enjoy going to the gym, playing pick up basketball and ultimate frisbee, and reading. I can also be found spending time with my wonderful cat and life partner, ZBar, whom I adopted and brought back home from Korea. I also love making people laugh (humor not demonstrated on this page, trying to keep it professional), maybe more than laughing myself.
                </p>
                <p>
                    I'm currently looking for a job at a company with an agreeable culture and opportunities to learn and grow as much as I can. It's important to me to work with senior developers who are willing and patient teachers.
                </p>
            </AboutDescription>
        </About>
    )
}