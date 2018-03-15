import React, {Component} from 'react'
import styled from 'styled-components'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import email from '../images/email.svg'

export default class Links extends Component {

    constructor(props) {
        super(props)

        this.state = {
            copied: false
        }
    }

    render() {
        const Links = styled.div`
            display: flex;
            width: 12rem;
            margin: 2rem auto;
            
            div {
                cursor: pointer;
                display: inline-block;
                height: 4.5rem;
                font-family: lato;
                font-size: 2rem;
                border-radius: 5px;
                text-align: center;
                padding-top: 7px;
                margin-right: 1rem;

                :first-child {
                    margin-left: 1rem;
                }

                img {
                    width: 25px;
                    height: 25px;
                    color: white;
                }
            }
        `

        const GitHub = styled.div`

        `

        const LinkedIn = styled.div`
        `

        const Email = styled.div`
        `
        const copied = () => {
            this.setState({copied: true})
        }

        const CopyAlert = styled.div`
            color: #f3f3f3;
            height: 3rem;
        `

        return (
            <div>
                <Links>
                    <GitHub>
                        <a href='https://github.com/dbrudner' target='_blank'>
                        <img src={github} />
                        </a>
                    </GitHub>
                    <LinkedIn>
                        <a href='https://www.linkedin.com/in/dbrudner/' target='_blank'>
                            <img src={linkedin} />
                        </a>
                    </LinkedIn>
                    <Email>
                        <CopyToClipboard text='dbrudne1@gmail.com' onCopy={(() => copied())}>
                            <img src={email} />
                        </CopyToClipboard>
                    </Email>
                </Links>
                <CopyAlert>
                    {this.state.copied ? 'Copied Email to clipboard' : null}
                </CopyAlert>
            </div>
        )
    }



}