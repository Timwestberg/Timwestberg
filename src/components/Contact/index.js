import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBAnimation, MDBIcon } from 'mdbreact';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
	width: '100%',
	height: '71vh',
	position: 'relative'
	// top: '28px'
};

const MAP = {
	defaultZoom: 12,
	defaultCenter: {
		lat: 32.852721,
		lng: -117.182762
	},
	options: {
		// styles: MapStyles,
		maxZoom: 19
	}
};
class ContactPage extends Component {
	state = {
		collapseID: '',
		mapOptions: {
			center: MAP.defaultCenter,
			zoom: MAP.defaultZoom
		}
	};

	toggleCollapse = (collapseID) => () =>
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}));

	render() {
		return (
			<MDBRow center>
				<MDBCol lg='8'>
					<MDBAnimation reveal type='tada'>
						<div style={{ height: 500 }} className='z-depth-2'>
							{/* <GoogleMapReact defaultCenter={{ lat: 33.6681, lng: -117.3273 }} defaultZoom={7} /> */}

							<Map
								yesIWantToUseGoogleMapApiInternals
								defaultZoom={MAP.defaultZoom}
								defaultCenter={MAP.defaultCenter}
								maxZoom={19}
								options={MAP.options}
								onChange={this.handleMapChange}
								onReady={this.fetchPlaces}
								google={this.props.google}
								zoom={10}
								style={style}
								// styles={MapStyles}
								initialCenter={{
									lat: 32.852721,
									lng: -117.182762
								}}
							/>
						</div>
					</MDBAnimation>
					<br />
					<MDBRow className='text-center'>
						<MDBCol md='4' className='col-md-4'>
							<a className='btn-floating primary-color' href='#!'>
								<MDBIcon icon='map-marker-alt' />
							</a>
							<p>Southern California</p>
							<p>United States</p>
						</MDBCol>

						<MDBCol md='4' className='col-md-4'>
							<a className='btn-floating primary-color' href='#!'>
								<MDBIcon icon='phone' />
							</a>
							<p>951 852 2584</p>
							<p>Mon - Fri, 8:00AM - 5:00PM</p>
						</MDBCol>

						<MDBCol md='4' className='col-md-4'>
							<a className='btn-floating primary-color' href='#!'>
								<MDBIcon icon='envelope' />
							</a>
							<p>TimWestberg@FormulaGen.com</p>
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
		);
	}
}

const LoadingContainer = (props) => <div>Fancy loading container!</div>;

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBBdrrchiVVEcgcVy2ssar7l4Ypzz1-81I',
	LoadingContainer: LoadingContainer
})(ContactPage);
