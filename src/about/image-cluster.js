import React, {Component} from 'react'
import styled from 'styled-components'
import me from '../images/me.jpg'
import zbar from '../images/cat1.png'
import chilpo from '../images/chilpo2.jpg'
import okinawa from '../images/okinawa.jpg'
import hotburger from '../images/hotburger.jpg'

export default class ImageCluster extends Component {

    constructor(props) {
        super(props)

        this.state = {
            caption: 'caption'
        }
    }

    showCaption = caption => {
        this.setState({
            caption
        })
    }

    removeCaption = () => {
        this.setState({caption: null})
    }

    render() {
        const ImageCluster = styled.div`
            position: relative;
            margin-left: 20%;

            img {
                width: 30rem;
                border-radius: 20px;
                box-shadow: 0 1.5rem 4rem rgb(11.2%, 11.2%, 11.2%);
                z-index: 1;
                transition: all .2s;

                &:nth-child(1) {
                    position: absolute;
                    top: 0;
                    left: 8rem;
                }

                &:nth-child(2) {
                    position: absolute;
                    top: 15rem;
                    left: 25rem;
                }

                &:nth-child(3) {
                    position: absolute;
                    top: 28rem;
                    left: 2rem;
                }

                &:hover {
                    z-index: 10;
                    transform: scale(1.05) translateY(-1rem);
                }
            }`

        return (
            <ImageCluster>
                <img src={zbar} onMouseLeave={() => this.removeCaption()} onMouseEnter={() => this.showCaption('cat')}/>
                <img src={me} />
                <img src={okinawa} />
            </ImageCluster>
        )
    }


}