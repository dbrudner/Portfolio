import React from 'react';
import './index.css'

import Header from './header'
import TechStack from './tech-stack'
import Projects from './projects'

export default function App() {

	return (
		<div>
			<Header/>
			<TechStack />
			<Projects/>
		</div>
	);
}