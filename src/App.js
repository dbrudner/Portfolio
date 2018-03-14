import React from 'react';
import './index.css'

import Header from './header'
import TechStack from './tech-stack'
import Projects from './projects'
import About from './about'
import Contact from './contact'

export default function App() {

	return (
		<div>
			<Header/>
			<Projects/>
			<About/>
			<Contact/>
		</div>
	);
}