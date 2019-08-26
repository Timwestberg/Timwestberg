import React from 'react';
import { MDBCol, MDBRow, MDBTooltip } from 'mdbreact';
import '../ProjectsCollage/style.css';
import './style.css';
const AnimationPage = () => {
	return (
		<MDBCol size='12' id='Skills'>
			<MDBRow>
				<MDBCol className='SkillHeader' sm='12'>
					{'Experience'
						.split('')
						.map((letter) => <span className='hvr-rotate font-weight-bold Blazing'>{letter}</span>)}{' '}
				</MDBCol>
			</MDBRow>

			<MDBRow>
				<MDBCol sm='12' md='4'>
					<div className='dark fire'>
						<h1 className='Blazing text-center' contenteditable='False'>
							Tech. Stack
						</h1>
					</div>

					<MDBCol sm='12' md='4'>
						<a href='https://www.mongodb.com/what-is-mongodb' title='MongoDB Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>MongoDB</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://expressjs.com/' title='Express JS Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>ExpressJS</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://reactjs.org/' title='React JS Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>ReactJs</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://nodejs.org/en/docs/' title='Node JS Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>NodeJs</div>
							</div>
						</a>
					</MDBCol>
				</MDBCol>

				<MDBCol sm='12' md='4'>
					<div className='dark fire'>
						<h1 className='Blazing text-center' contenteditable='False'>
							Front-End
						</h1>
					</div>
					<MDBCol sm='12' md='4'>
						<a href='https://www.javascript.com/' title='Javascript Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>Javascript</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://jquery.com/' title='JQuery Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>JQuery</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://handlebarsjs.com/' title='Handlebars JS Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>Handlebars</div>
							</div>
						</a>
					</MDBCol>
					<MDBCol sm='12' md='4'>
						<a
							href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
							title='HTML Docs'
							target='_blank'>
							<div className='svg-wrapper'>
								<MDBTooltip
									placement='left'
									tag='div'
									tooltipContent='Hyper-text Markup Language'
									className='d-flex justify-content-center'>
									<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
										<rect className='shape' height='60' width='320' />
									</svg>
									<div className='text text-center'>HTML</div>
								</MDBTooltip>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://developer.mozilla.org/en-US/docs/Web/CSS' title='CSS Docs' target='_blank'>
							<div className='svg-wrapper'>
								<MDBTooltip
									placement='left'
									tag='div'
									tooltipContent='Cascading Style Sheets'
									className='d-flex justify-content-center'>
									<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
										<rect className='shape' height='60' width='320' />
									</svg>
									<div className='text text-center'>CSS</div>
								</MDBTooltip>
							</div>
						</a>
					</MDBCol>
					<MDBCol sm='12' md='4'>
						<a
							href='https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started'
							title='AJAX Docs'
							target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>AJAX</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://www.npmjs.com/package/axios' title='Axios JS Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>Axios</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://www.json.org/' title='JSON Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>JSON</div>
							</div>
						</a>
					</MDBCol>
					<MDBCol sm='12' md='4'>
						<a href='https://material.io/design/' title='Google Material Design Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>Material Design</div>
							</div>
						</a>
					</MDBCol>
					<MDBCol sm='12' md='4'>
						<a href='https://mdbootstrap.com/docs/react/' title='Material Design Bootstrap Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>MDBootstrap</div>
							</div>
						</a>
					</MDBCol>
					<MDBCol sm='12' md='4'>
						<a
							href='https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller'
							title='MVC Wiki'
							target='_blank'>
							<div className='svg-wrapper'>
								<MDBTooltip
									placement='left'
									tag='div'
									tooltipContent='Model-View-Controller'
									className='d-flex justify-content-center'>
									<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
										<rect className='shape' height='60' width='320' />
									</svg>
									<div className='text text-center'>MVC</div>
								</MDBTooltip>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://github.com/' title='Github' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>Version Control</div>
							</div>
						</a>
					</MDBCol>
				</MDBCol>

				<MDBCol sm='12' md='4'>
					<div className='dark fire'>
						<h1 className='Blazing' contenteditable='False'>
							Back-End
						</h1>
					</div>

					<MDBCol sm='12' md='4'>
						<a
							href='https://en.wikipedia.org/wiki/Application_programming_interface'
							title='API Wiki'
							target='_blank'>
							<div className='svg-wrapper'>
								<MDBTooltip
									placement='left'
									tag='div'
									tooltipContent='Application programming interface'
									className='d-flex justify-content-center'>
									<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
										<rect className='shape' height='60' width='320' />
									</svg>
									<div className='text text-center'>API's</div>
								</MDBTooltip>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://firebase.google.com/docs' title='Firebase Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>Google Firebase</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://mongoosejs.com/' title='Mongoose JS Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>MongooseJs</div>
							</div>
						</a>
					</MDBCol>
					<MDBCol sm='12' md='4'>
						<a href='https://www.mysql.com/' title='MYSQL Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>MYSQL</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://www.npmjs.com/' title='NPM Docs' target='_blank'>
							<div className='svg-wrapper'>
								<MDBTooltip
									placement='left'
									tag='div'
									tooltipContent='Node Package Manager'
									className='d-flex justify-content-center'>
									<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
										<rect className='shape' height='60' width='320' />
									</svg>

									<div className='text text-center'>NPM</div>
								</MDBTooltip>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='http://www.passportjs.org/' title='Passport JS Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>PassportJs</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://www.getpostman.com/' title='Postman Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>Postman</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://sequelize.org/master/' title='Sequelize JS Docs' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>SequelizeJs</div>
							</div>
						</a>
					</MDBCol>

					<MDBCol sm='12' md='4'>
						<a href='https://en.wikipedia.org/wiki/SQL' title='SQL Wiki' target='_blank'>
							<div className='svg-wrapper'>
								<svg height='60' width='320' xmlns='http://www.w3.org/2000/svg'>
									<rect className='shape' height='60' width='320' />
								</svg>
								<div className='text text-center'>SQL</div>
							</div>
						</a>
					</MDBCol>
				</MDBCol>
			</MDBRow>
		</MDBCol>
	);
};

export default AnimationPage;
