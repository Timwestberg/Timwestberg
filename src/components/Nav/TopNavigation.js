import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBCol, MDBRow, MDBSmoothScroll, MDBIcon } from 'mdbreact';
import Resume from './TWestbergResume.pdf';
class Profile extends Component {
	state = {
		collapseID: ''
	};

	toggleCollapse = (collapseID) => () =>
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}));

	render() {
		return (
			<div>
				<MDBNavbar
					className='font-weight-bold fixed-top text-center'
					color='unique-color-dark'
					style={{ marginTop: '0px' }}
					dark>
					<MDBNavbarNav center>
						<MDBRow>
							<MDBCol>
								<MDBNavItem>
									<MDBSmoothScroll to='projects'>Projects</MDBSmoothScroll>
								</MDBNavItem>
							</MDBCol>
							<MDBCol>
								<MDBNavItem>
									<MDBSmoothScroll to='experience'>Experience</MDBSmoothScroll>
								</MDBNavItem>
							</MDBCol>

							<MDBCol>
								<a
									title='Tim&#39;s Github'
									className='white-text'
									rel='noopener noreferrer'
									target='_blank'
									href='https://github.com/Timwestberg'>
									<MDBNavItem>
										<MDBIcon fab icon='github' size='lg' />
									</MDBNavItem>
								</a>
							</MDBCol>

							<MDBCol>
								<a
									title='Tim&#39;s LinkedIn'
									className='white-text'
									target='_blank'
									rel='noopener noreferrer'
									href='https://www.linkedin.com/in/tim-westberg-516022162/'>
									<MDBNavItem>
										<MDBIcon fab icon='linkedin-in' size='lg' />
									</MDBNavItem>
								</a>
							</MDBCol>

							<MDBCol sm='12' md='3'>
								<a className='white-text' title='Download Resume' download='TimWestberg_Resume' href={Resume}>
									<MDBNavItem>
										Resume <MDBIcon icon='download' />
									</MDBNavItem>
								</a>
							</MDBCol>
						</MDBRow>
					</MDBNavbarNav>
				</MDBNavbar>
			</div>
		);
	}
}

export default Profile;
