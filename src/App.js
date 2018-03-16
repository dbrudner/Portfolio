import React from 'react';
import './index.css'

import Header from './header'
import TechStack from './tech-stack'
import Projects from './projects'
import About from './about'
import Contact from './contact'

import styled, {keyframes} from 'styled-components'

export default function App() {

	const fadeIn = keyframes`
		from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
	`
	
	const App = styled.div`
		animation: ${fadeIn} 1s;
	`

	return (
		<App>
			<Header/>
			<Projects/>
			<About/>
			<Contact/>
		</App>
	);
}