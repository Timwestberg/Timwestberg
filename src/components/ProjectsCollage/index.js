import React, { Component, Fragment } from 'react';
import {
	MDBCollapse,
	MDBCard,
	MDBCardBody,
	MDBCollapseHeader,
	MDBCol,
	MDBRow,
	MDBBtn,
	MDBIcon,
	MDBAnimation,
	MDBListGroup,
	MDBListGroupItem,
	MDBTooltip,
	MDBMask,
	MDBView
} from 'mdbreact';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './style.css';
class CollapsePage extends Component {
	state = {
		collapseID: 'collapse1',
		value1: '(951)852-2584',
		copied1: false,
		copied2: false,
		value2: 'TimWestberg@formulaGen.com'
	};

	toggleCollapse = (collapseID) => () =>
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}));

	render() {
		return (
			<div id='Header' className='accordion md-accordion accordion-4'>
				<MDBAnimation type='fadeInDown' duration='2s'>
					<br /> <br />
					<h1 className='white-text h1-responsive font-weight-bold text-center my-5'>Tim Westberg</h1>
				</MDBAnimation>

				<MDBRow className='text-center'>
					<MDBCol md='3' className='white-text'>
						<MDBTooltip
							placement='right'
							tag='div'
							tooltipContent={
								<MDBIcon far icon='copy'>
									<br /> Copy
								</MDBIcon>
							}
							className='d-flex justify-content-center'>
							<CopyToClipboard text={this.state.value1} onCopy={() => this.setState({ copied1: true })}>
								<a className='btn-floating primary-color'>
									<MDBIcon icon='phone' />
								</a>
							</CopyToClipboard>
						</MDBTooltip>
						{'(951)852-2584'
							.split('')
							.map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}
						{this.state.copied1 ? <span style={{ color: 'red' }}>Copied.</span> : null}
						<br />
						<MDBTooltip
							placement='right'
							tag='div'
							tooltipContent={
								<MDBIcon far icon='copy'>
									<br /> Copy
								</MDBIcon>
							}
							className='d-flex justify-content-center'>
							<CopyToClipboard text={this.state.value2} onCopy={() => this.setState({ copied2: true })}>
								<a className='btn-floating primary-color' href='#!'>
									<MDBIcon icon='envelope' />
								</a>
							</CopyToClipboard>
						</MDBTooltip>
						<h5 className='font-weight-bold emailTim'>
							{' '}
							{'TimWestberg@FormulaGen.com'
								.split('')
								.map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}
							{this.state.copied2 ? <span style={{ color: 'red' }}>Copied.</span> : null}
						</h5>{' '}
					</MDBCol>

					<MDBCol md='6' className='white-text'>
						<MDBAnimation type='fadeInDown' duration='2s'>
							<h5 className='white-text w-responsive text-center mx-auto mb-5'>
								I am a user-focused Web Developer with a passion for integrating technologies to solve problems
								and improve existing methods. My background in office management, bookkeeping, and sales
								provides me with a unique perspective on how end-users interact with websites and software
								platforms. I enjoy approaching programming challenges from different angles and collaborating
								with others to create meaningful web applications that effectively elevate the user and client
								experience. My ultimate goal is to provide solutions that are simple and intuitive to clients.
							</h5>
						</MDBAnimation>
					</MDBCol>

					<MDBCol md='3' className='white-text'>
						<MDBTooltip
							placement='left'
							tag='div'
							tooltipContent={
								<MDBIcon icon='map-marked-alt'>
									{' '}
									<br />Maps
								</MDBIcon>
							}
							className='d-flex justify-content-center'>
							<a
								className='btn-floating primary-color'
								target='_blank'
								href='https://www.google.com/maps/place/Temecula,+CA/@33.4799573,-117.1303691,10.7z/data=!4m13!1m7!3m6!1s0x80c325a785c9a649:0x7223c333f40c68d8!2sSouthern+California,+CA!3b1!8m2!3d34.9592083!4d-116.419389!3m4!1s0x80db6252f51abe23:0x68bc0e88a03806a8!8m2!3d33.4933073!4d-117.1485901'>
								<MDBIcon icon='map-marker-alt' />
							</a>
						</MDBTooltip>
						{'Southern'
							.split('')
							.map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}{' '}
						{'California'.split('').map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}
						<br />
						{'United'
							.split('')
							.map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}{' '}
						{'States'.split('').map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}
					</MDBCol>
				</MDBRow>

				<MDBAnimation type='bounceInUp' duration='1s'>
					<MDBCard style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
						<MDBAnimation type='bounceInUp' duration='1s'>
							<MDBCollapseHeader
								id='schedulizeHeader'
								className='z-depth-3  text-center  text-uppercase'
								tag='h2'
								onClick={this.toggleCollapse('collapse1')}>
								{'Schedulize (ReactJs)'
									.split('')
									.map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}

								<MDBIcon
									icon={this.state.collapseID === 'collapse1' ? 'angle-up' : 'angle-down'}
									className='white-text'
									style={{ float: 'right' }}
								/>
							</MDBCollapseHeader>
						</MDBAnimation>
						<MDBCollapse id='collapse1' isOpen={this.state.collapseID}>
							<MDBCardBody id='Schedulize' className='amber light-green lighten-4 white-text'>
								<section className='my-5'>
									<MDBRow>
										<MDBCol md='5' className='mb-lg-0 mb-5'>
											<MDBAnimation type='fadeInLeft' duration='2s'>
												<div
													style={{
														width: '100%',
														height: '0',
														paddingBottom: '48%',
														position: 'relative'
													}}>
													<img
														width='90%'
														height='90%'
														style={{ position: 'absolute' }}
														src='https://media.giphy.com/media/J2ZlkHSXlSMyhhf7ij/giphy.gif'
														className='img-fluid'
														alt=''
													/>
												</div>
											</MDBAnimation>
										</MDBCol>

										<MDBCol lg='6'>
											<MDBAnimation type='fadeInRight' duration='2s'>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon far icon='comment-alt' size='2x' className='indigo-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>Schedulize</h1>
														<span className='black-text font-weight-bold projectTextContent'>
															React application built for scheduling contractors to appointments on an
															agency level. Used to manage, schedule, and organize data efficiently for
															agencies to quickly find, update, and create new work orders.
														</span>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='code' size='2x' className='red-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>Technology</h1>
														<span className='white-text'>
															<MDBRow>
																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center' active>
																			<MDBIcon fab icon='react' /> Front End
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://reactjs.org/'>
																			ReactJs
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.npmjs.com/package/axios'>
																			Axios
																		</MDBListGroupItem>

																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.npmjs.com/package/google-map-react'>
																			Google Maps API
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://developers.google.com/maps/documentation/geocoding/start?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_315916117664-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+~+Geocoding+API-KWID_43700039136946174-kwd-301485311002-userloc_9031519&utm_term=KW_geocoding%20api-ST_geocoding+api&gclid=EAIaIQobChMI4crZpprg4wIVvSCtBh1NIwAOEAAYASAAEgKkMPD_BwE'>
																			Google Geocoding
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://mdbootstrap.com/'>
																			Material Design Bootstrap (MDB)
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>
																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center' active>
																			<MDBIcon icon='database' /> Back End
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://nodejs.org/en/about/'>
																			NodeJS
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://expressjs.com/'>
																			ExpressJs
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.mongodb.com/'>
																			MongoDB
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://mongoosejs.com/'>
																			MongooseJS
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='http://www.passportjs.org/'>
																			PassportJS
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>
															</MDBRow>
														</span>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='map-marked-alt' size='2x' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>
															Browse around
														</h1>
														<span className='white-text'>
															<Fragment>
																<MDBRow>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='left'
																			tag='div'
																			tooltipContent='Check out the site!'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				href='https://schedulizeapp.herokuapp.com'
																				tag='a'
																				size='lg'
																				floating
																				gradient='purple'>
																				<MDBIcon icon='calendar-alt' size='2x' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='right'
																			tag='a'
																			tooltipContent='Check out the Code'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				tag='a'
																				size='lg'
																				target='_blank'
																				href='https://github.com/Timwestberg/Schedulize-App'
																				floating
																				gradient='blue'>
																				<MDBIcon fab size='2x' icon='github-alt' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																</MDBRow>
															</Fragment>
														</span>
													</MDBCol>
												</MDBRow>
											</MDBAnimation>
										</MDBCol>
									</MDBRow>
								</section>
							</MDBCardBody>
						</MDBCollapse>
					</MDBCard>
				</MDBAnimation>
				<MDBAnimation type='bounceInUp' reveal duration='1s'>
					<MDBCard style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
						<MDBCollapseHeader
							id='gigITHeader'
							className='z-depth-3  text-center text-uppercase'
							tagClassName='black-text text-center font-weight-bold text-uppercase'
							tag='h2'
							onClick={this.toggleCollapse('collapse2')}>
							{'Gig-it (ReactJs)'
								.split('')
								.map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}

							<MDBIcon
								icon={this.state.collapseID === 'collapse2' ? 'angle-up' : 'angle-down'}
								className='white-text'
								style={{ float: 'right' }}
							/>
						</MDBCollapseHeader>

						<MDBCollapse id='collapse2' isOpen={this.state.collapseID}>
							<MDBCardBody id='GigIT' className='rgba-teal-strong white-text'>
								<section className='my-5'>
									<MDBRow>
										<MDBCol md='5' className='mb-lg-0 mb-5'>
											<MDBAnimation type='fadeInLeft' duration='2s'>
												<div
													style={{
														width: '100%',
														height: '0',
														paddingBottom: '48%',
														position: 'relative'
													}}>
													<img
														width='90%'
														height='90%'
														style={{ position: 'absolute' }}
														src='https://media.giphy.com/media/hQWc3LYm9KdOl78OyW/giphy.gif'
														className='img-fluid'
														alt=''
													/>
												</div>
											</MDBAnimation>
										</MDBCol>

										<MDBCol lg='6'>
											<MDBAnimation type='fadeInRight' duration='2s'>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon far icon='comment-alt' size='2x' className='indigo-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>Gig-It </h1>
														<span className='font-weight-bold black-text projectTextContent'>
															Application that provides musicians with a platform to share news, updates,
															and shows! A great hub for fans to find and connect with new, local, and
															old talent.
														</span>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='code' size='2x' className='red-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>Technology</h1>
														<span className='white-text'>
															<MDBRow>
																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center' active>
																			<MDBIcon fab icon='js-square' /> Front End
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://reactjs.org/'>
																			Javascript
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.npmjs.com/package/axios'>
																			Axios
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
																			CSS
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.npmjs.com/package/google-map-react'>
																			Google Maps API
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://developers.google.com/maps/documentation/geocoding/start?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_315916117664-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+~+Geocoding+API-KWID_43700039136946174-kwd-301485311002-userloc_9031519&utm_term=KW_geocoding%20api-ST_geocoding+api&gclid=EAIaIQobChMI4crZpprg4wIVvSCtBh1NIwAOEAAYASAAEgKkMPD_BwE'>
																			Google Geocoding
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://getbootstrap.com/2.3.2/index.html'>
																			Twitter Bootstrap
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>
																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center' active>
																			<MDBIcon icon='database' /> Back End
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://nodejs.org/en/about/'>
																			NodeJS
																		</MDBListGroupItem>

																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.mongodb.com/'>
																			Firebase
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>
															</MDBRow>
														</span>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='music' size='2x' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>Jam around!</h1>
														<span className='white-text'>
															<Fragment>
																<MDBRow>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='left'
																			tag='div'
																			tooltipContent='Check out the site!'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				tag='a'
																				size='lg'
																				href='https://ptamayo97.github.io/Gig-It-project/'
																				floating
																				gradient='purple'>
																				<MDBIcon icon='guitar' size='2x' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='right'
																			tag='a'
																			tooltipContent='Check out the Code'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				tag='a'
																				size='lg'
																				target='_blank'
																				href='https://github.com/ptamayo97/Gig-It-project'
																				floating
																				gradient='blue'>
																				<MDBIcon fab size='2x' icon='github-alt' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																</MDBRow>
															</Fragment>
														</span>
													</MDBCol>
												</MDBRow>
											</MDBAnimation>
										</MDBCol>
									</MDBRow>
								</section>
							</MDBCardBody>
						</MDBCollapse>
					</MDBCard>
				</MDBAnimation>
				<MDBAnimation type='bounceInUp' reveal duration='1s'>
					<MDBCard style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
						<MDBCollapseHeader
							id='HappyCamperHeader'
							className='z-depth-3 text-center text-uppercase'
							tagClassName='text-center font-weight-bold text-uppercase'
							tag='h2'
							onClick={this.toggleCollapse('collapse3')}>
							{'Happy'.split('').map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)} {' '}
							{'Camper (JQuery)'
								.split('')
								.map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}
							<MDBIcon
								icon={this.state.collapseID === 'collapse3' ? 'angle-up' : 'angle-down'}
								className='white-text'
								style={{ float: 'right' }}
							/>
						</MDBCollapseHeader>

						<MDBCollapse id='collapse3' isOpen={this.state.collapseID}>
							<MDBCardBody id='HappyCamper' className='white-text'>
								<section className='my-5'>
									<MDBRow>
										<MDBCol md='5' className='mb-lg-0 mb-5'>
											<MDBAnimation type='fadeInLeft' duration='2s'>
												<div
													style={{
														width: '100%',
														height: '0',
														paddingBottom: '48%',
														position: 'relative'
													}}>
													<img
														width='90%'
														height='90%'
														style={{ position: 'absolute' }}
														src='https://media.giphy.com/media/UQgctYMZqAz4nQVu5D/giphy.gif'
														className='img-fluid'
														alt=''
													/>
												</div>
											</MDBAnimation>
										</MDBCol>

										<MDBCol lg='6'>
											<MDBAnimation type='fadeInRight' duration='2s'>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon far icon='comment-alt' size='2x' className='indigo-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3'>Happy Camper</h1>
														<span className='black-text font-weight-bold projectTextContent'>
															Happy Camper is a small single page, Javascript(handlebars) application.
															The user first selects a park by name, state, or the popular parks section.
															The appopriate park information is then presented and the user is given the
															option to leave a review for prospective travelers.
														</span>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='code' size='2x' className='red-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3'>Technology</h1>
														<span className='white-text'>
															<MDBRow>
																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center' active>
																			<MDBIcon fab icon='react' /> Front End
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://reactjs.org/'>
																			ReactJs
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.npmjs.com/package/axios'>
																			Axios
																		</MDBListGroupItem>

																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.npmjs.com/package/google-map-react'>
																			Google Maps API
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://developers.google.com/maps/documentation/geocoding/start?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_315916117664-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+~+Geocoding+API-KWID_43700039136946174-kwd-301485311002-userloc_9031519&utm_term=KW_geocoding%20api-ST_geocoding+api&gclid=EAIaIQobChMI4crZpprg4wIVvSCtBh1NIwAOEAAYASAAEgKkMPD_BwE'>
																			Google Geocoding
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://mdbootstrap.com/'>
																			Material Design Bootstrap (MDB)
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>
																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center' active>
																			<MDBIcon icon='database' /> Back End
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://nodejs.org/en/about/'>
																			NodeJS
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://expressjs.com/'>
																			ExpressJs
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.mongodb.com/'>
																			MongoDB
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://mongoosejs.com/'>
																			MongooseJS
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='http://www.passportjs.org/'>
																			PassportJS
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>
															</MDBRow>
														</span>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='tree' size='2x' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3'>Explore</h1>
														<span className='white-text'>
															<Fragment>
																<MDBRow>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='left'
																			tag='div'
																			tooltipContent='Check out the site!'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				tag='a'
																				size='lg'
																				href='https://pure-wave-97099.herokuapp.com/'
																				floating
																				gradient='purple'>
																				<MDBIcon icon='campground' size='2x' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='right'
																			tag='a'
																			tooltipContent='Check out the Code'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				tag='a'
																				size='lg'
																				target='_blank'
																				href='https://github.com/Timwestberg/HappyCamper'
																				floating
																				gradient='blue'>
																				<MDBIcon fab size='2x' icon='github-alt' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																</MDBRow>
															</Fragment>
														</span>
													</MDBCol>
												</MDBRow>
											</MDBAnimation>
										</MDBCol>
									</MDBRow>
								</section>
							</MDBCardBody>
						</MDBCollapse>
					</MDBCard>
				</MDBAnimation>
				<MDBAnimation type='bounceInUp' reveal duration='1s'>
					<MDBCard id='PirateCapture'>
						<MDBCollapseHeader
							id='PirateCaptureHeader'
							className='z-depth-3  text-center text-uppercase'
							// tagClassName='black-text text-center font-weight-bold text-uppercase'
							tag='h2'
							onClick={this.toggleCollapse('collapse4')}>
							{'Pirate'.split('').map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)} {' '}
							{'Capture (ReactJs)'
								.split('')
								.map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}
							<MDBIcon
								icon={this.state.collapseID === 'collapse4' ? 'angle-up' : 'angle-down'}
								className='white-text'
								style={{ float: 'right' }}
							/>
						</MDBCollapseHeader>

						<MDBCollapse id='collapse4' isOpen={this.state.collapseID}>
							<MDBCardBody className='white-text'>
								<section className='my-5'>
									<MDBRow>
										<MDBCol md='5' className='mb-lg-0 mb-5'>
											<MDBAnimation type='fadeInLeft' duration='2s'>
												<div
													style={{
														width: '90%',
														height: '0',
														paddingBottom: '48%',
														position: 'relative'
													}}>
													<img
														width='90%'
														height='90%'
														style={{ position: 'absolute' }}
														src='https://media.giphy.com/media/dXvNO4h3kua9n9MVxE/giphy.gif'
														className='img-fluid'
														alt=''
													/>
												</div>
											</MDBAnimation>
										</MDBCol>

										<MDBCol lg='6'>
											<MDBAnimation type='fadeInRight' duration='2s'>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon far icon='comment-alt' size='2x' className='indigo-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>
															Pirate Capture:One Piece
														</h1>
														<span className='black-text font-weight-bold projectTextContent'>
															This Javascript(ReactJs) application dives straight into the New World, a
															One Piece themed pirate matching game. Do your best to outsmart Bon Clay
															and capture the Straw Hats!
														</span>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='code' size='2x' className='red-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>Technology</h1>
														<span className='white-text'>
															<MDBRow>
																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center' active>
																			<MDBIcon fab icon='react' /> Front End
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://reactjs.org/'>
																			ReactJs
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.npmjs.com/package/axios'>
																			Axios
																		</MDBListGroupItem>

																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.npmjs.com/package/google-map-react'>
																			Google Maps API
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://developers.google.com/maps/documentation/geocoding/start?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_315916117664-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+~+Geocoding+API-KWID_43700039136946174-kwd-301485311002-userloc_9031519&utm_term=KW_geocoding%20api-ST_geocoding+api&gclid=EAIaIQobChMI4crZpprg4wIVvSCtBh1NIwAOEAAYASAAEgKkMPD_BwE'>
																			Google Geocoding
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://mdbootstrap.com/'>
																			Material Design Bootstrap (MDB)
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>
																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center' active>
																			<MDBIcon icon='database' /> Back End
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://nodejs.org/en/about/'>
																			NodeJS
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://expressjs.com/'>
																			ExpressJs
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.mongodb.com/'>
																			MongoDB
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://mongoosejs.com/'>
																			MongooseJS
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='http://www.passportjs.org/'>
																			PassportJS
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>
															</MDBRow>
														</span>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='skull-crossbones red-text' size='2x' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>Set Sail </h1>
														<span className='white-text'>
															<Fragment>
																<MDBRow>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='left'
																			tag='div'
																			tooltipContent='Check out the site!'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				href='https://timwestberg.github.io/PirateCapture/'
																				tag='a'
																				size='lg'
																				floating
																				gradient='purple'>
																				<MDBIcon icon='ship' size='2x' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='right'
																			tag='a'
																			tooltipContent='Check out the Code'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				tag='a'
																				size='lg'
																				target='_blank'
																				href='https://github.com/Timwestberg/PirateCapture'
																				floating
																				gradient='blue'>
																				<MDBIcon fab size='2x' icon='github-alt' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																</MDBRow>
															</Fragment>
														</span>
													</MDBCol>
												</MDBRow>
											</MDBAnimation>
										</MDBCol>
									</MDBRow>
								</section>
							</MDBCardBody>
						</MDBCollapse>
					</MDBCard>
				</MDBAnimation>
				<MDBAnimation type='bounceInUp' reveal duration='1s'>
					<MDBCard style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
						<MDBCollapseHeader
							className='z-depth-3  text-center text-uppercase'
							id='BurgerMeHeader'
							// tagClassName='black-text text-center font-weight-bold text-uppercase'
							tag='h2'
							onClick={this.toggleCollapse('collapse5')}>
							{'Burger'
								.split('')
								.map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}{' '}
							{'Me (Handlebars)'
								.split('')
								.map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}
							<MDBIcon
								icon={this.state.collapseID === 'collapse5' ? 'angle-up' : 'angle-down'}
								className='white-text'
								style={{ float: 'right' }}
							/>
						</MDBCollapseHeader>

						<MDBCollapse id='collapse5' isOpen={this.state.collapseID}>
							<MDBCardBody id='BurgerMe' className='light-green lighten-4 white-text'>
								<section className='my-5'>
									<MDBRow>
										<MDBCol lg='5' className='mb-lg-0 mb-5'>
											<MDBAnimation type='fadeInLeft' duration='2s'>
												<img
													src='https://mdbootstrap.com/img/Photos/Others/images/83.jpg'
													alt=''
													className='img-fluid rounded z-depth-1'
												/>
											</MDBAnimation>
										</MDBCol>

										<MDBCol lg='6'>
											<MDBAnimation type='fadeInRight' duration='2s'>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon far icon='comment-alt' size='2x' className='indigo-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='black-text font-weight-bold  mb-3 word-shadow'>Burger Me</h1>
														<p className='black-text font-weight-bold projectTextContent'>
															Got a favorite custom burger but can never remember the exact ingredients?
															Well look no further with BurgerMe, a Javascript(ReactJs) application, a
															user can store their favorite burger recipes for later. Never forget a
															great burger, BurgerMe!
														</p>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='code' size='2x' className='red-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>Technology</h1>
														<span className='white-text'>
															<MDBRow>
																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center special-color deep-orange-text'>
																			<MDBIcon
																				fab
																				className='font-weight-bold mb-3 techHeader word-shadow'
																				icon='react'>
																				Front End
																			</MDBIcon>
																		</MDBListGroupItem>

																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
																			CSS
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://handlebarsjs.com/'>
																			express-handlebars
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.w3schools.com/html/'>
																			HTML
																		</MDBListGroupItem>

																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://jquery.com/'>
																			JQuery
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>

																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center' active>
																			<MDBIcon icon='database' /> Back End
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://nodejs.org/en/docs/'>
																			NodeJS
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://expressjs.com/'>
																			ExpressJs
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.mysql.com/'>
																			MYSQL
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>
															</MDBRow>
														</span>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='utensils' size='2x' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>
															Flip a new order!
														</h1>
														<span className='white-text'>
															<Fragment>
																<MDBRow>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='left'
																			tag='div'
																			tooltipContent='Check out the site!'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				href='https://thawing-journey-27450.herokuapp.com/'
																				tag='a'
																				size='lg'
																				floating
																				gradient='purple'>
																				<MDBIcon icon='hamburger' size='2x' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='right'
																			tag='a'
																			tooltipContent='Check out the Code'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				tag='a'
																				size='lg'
																				target='_blank'
																				href='https://github.com/Timwestberg/Burger-me-Bro'
																				floating
																				gradient='blue'>
																				<MDBIcon fab size='2x' icon='github-alt' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																</MDBRow>
															</Fragment>
														</span>
													</MDBCol>
												</MDBRow>
											</MDBAnimation>
										</MDBCol>

										{/* </MDBRow> */}
										{/* <hr className='my-5' /> */}
										{/* <MDBRow> */}
									</MDBRow>
								</section>
							</MDBCardBody>
						</MDBCollapse>
					</MDBCard>
				</MDBAnimation>
				<MDBAnimation type='bounceInUp' reveal duration='1s'>
					<MDBCard style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
						<MDBCollapseHeader
							id='TriviaHeader'
							className='z-depth-1 text-center text-uppercase'
							// tagClassName='black-text text-center font-weight-bold text-center text-uppercase'
							tag='h2'
							onClick={this.toggleCollapse('collapse6')}>
							{'Trivia (Javascript)'
								.split('')
								.map((letter) => <span className='hvr-float font-weight-bold'>{letter}</span>)}{' '}
							<MDBIcon
								icon={this.state.collapseID === 'collapse6' ? 'angle-up' : 'angle-down'}
								className='white-text'
								style={{ float: 'right' }}
							/>
						</MDBCollapseHeader>

						<MDBCollapse id='collapse6' isOpen={this.state.collapseID}>
							<MDBCardBody id='Trivia' className='rgba-teal-strong white-text'>
								<section className='my-5'>
									<MDBRow>
										<MDBCol md='5' className='mb-lg-0 mb-5'>
											<MDBAnimation type='fadeInLeft' duration='2s'>
												<div
													style={{
														width: '100%',
														height: '0',
														paddingBottom: '48%',
														position: 'relative'
													}}>
													<img
														width='90%'
														height='90%'
														style={{ position: 'absolute' }}
														src='https://media.giphy.com/media/d8d3GWNEEzn1DYrjIm/giphy.gif'
														className='img-fluid'
														alt=''
													/>
												</div>
											</MDBAnimation>
										</MDBCol>

										<MDBCol lg='6'>
											<MDBAnimation type='fadeInRight' duration='2s'>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon far icon='comment-alt' size='2x' className='indigo-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>Trivia</h1>
														<span className='black-text font-weight-bold projectTextContent'>
															Small Javascript and custom CSS trivia app. Test your knowledge with these
															quick quizzes!
														</span>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='code' size='2x' className='red-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>Technology</h1>
														<span className='white-text'>
															<MDBRow>
																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center' active>
																			<MDBIcon fab icon='react' /> Front End
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://reactjs.org/'>
																			ReactJs
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.npmjs.com/package/axios'>
																			Axios
																		</MDBListGroupItem>

																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.npmjs.com/package/google-map-react'>
																			Google Maps API
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://developers.google.com/maps/documentation/geocoding/start?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_315916117664-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+~+Geocoding+API-KWID_43700039136946174-kwd-301485311002-userloc_9031519&utm_term=KW_geocoding%20api-ST_geocoding+api&gclid=EAIaIQobChMI4crZpprg4wIVvSCtBh1NIwAOEAAYASAAEgKkMPD_BwE'>
																			Google Geocoding
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://mdbootstrap.com/'>
																			Material Design Bootstrap (MDB)
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>
																<MDBCol sm='12' md='6'>
																	<MDBListGroup style={{ width: '14rem' }}>
																		<MDBListGroupItem className='text-center' active>
																			<MDBIcon icon='database' /> Back End
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://nodejs.org/en/about/'>
																			NodeJS
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://expressjs.com/'>
																			ExpressJs
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://www.mongodb.com/'>
																			MongoDB
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='https://mongoosejs.com/'>
																			MongooseJS
																		</MDBListGroupItem>
																		<MDBListGroupItem
																			tag='a'
																			target='_blank'
																			href='http://www.passportjs.org/'>
																			PassportJS
																		</MDBListGroupItem>
																	</MDBListGroup>
																</MDBCol>
															</MDBRow>
														</span>
													</MDBCol>
												</MDBRow>
												<MDBRow className='mb-3'>
													<MDBCol md='1' size='2'>
														<MDBIcon icon='smile' size='2x' className='blue-text' />
													</MDBCol>
													<MDBCol md='11' size='10'>
														<h1 className='font-weight-bold black-text mb-3 word-shadow'>
															Take a Guess!?
														</h1>
														<span className='white-text'>
															<Fragment>
																<MDBRow>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='left'
																			tag='div'
																			tooltipContent='Check out the site!'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				href='https://timwestberg.github.io/TriviaGame/'
																				tag='a'
																				size='lg'
																				floating
																				gradient='purple'>
																				<MDBIcon icon='calendar-alt' size='2x' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																	<MDBCol sm='6'>
																		<MDBTooltip
																			placement='right'
																			tag='a'
																			tooltipContent='Check out the Code'
																			className='d-flex justify-content-center'>
																			<MDBBtn
																				tag='a'
																				size='lg'
																				target='_blank'
																				href='https://github.com/Timwestberg/TriviaGame'
																				floating
																				gradient='blue'>
																				<MDBIcon fab size='2x' icon='github-alt' />
																			</MDBBtn>
																		</MDBTooltip>
																	</MDBCol>
																</MDBRow>
															</Fragment>
														</span>
													</MDBCol>
												</MDBRow>
											</MDBAnimation>
										</MDBCol>
									</MDBRow>
								</section>
							</MDBCardBody>
						</MDBCollapse>
					</MDBCard>
				</MDBAnimation>
			</div>
		);
	}
}

export default CollapsePage;
