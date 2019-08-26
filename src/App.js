import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import './index.css';
import Nav from './components/Nav/TopNavigation';
import Projects from '../src/components/ProjectsCollage/index';
import Experience from '../src/components/Experience/index';
class App extends Component {
	render() {
		return (
			<div>
				{' '}
				<Nav />
				<MDBRow id='projects'>
					<Projects />
				</MDBRow>
				<MDBRow id='experience'>
					{/* <MDBCol size='12'> */}
					<Experience />
					{/* </MDBCol> */}
				</MDBRow>
			</div>
		);
	}
}

export default App;
