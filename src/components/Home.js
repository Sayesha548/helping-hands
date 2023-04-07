import React from 'react'
import Footer from './Footer'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import team from '../images/team.png'
import help from '../images/help.png'
import people from '../images/people.png'
import child from '../images/child.png'
import med from '../images/med.png'
import ash from '../images/ash.png'
import main from '../images/main.jpg'
import volunter from '../images/volunter.png'
import clothes from '../images/clothes.png'
import volunter2 from '../images/volunter2.png'
import Ellipse2 from '../images/Ellipse2.png'
import Ellipse3 from '../images/Ellipse3.png'
import Ellipse4 from '../images/Ellipse4.png'
import Ellipse5 from '../images/Ellipse5.png'
import Ellipse6 from '../images/Ellipse6.png'
import Selfhelp from '../images/Selfhelp.png'
import download from '../images/download.png'
import stationary from '../images/stationary.png'
import gadgets from '../images/gadgets.png'
import footer from '../images/footer.png'
import hands from '../images/hands.png'
import food from '../images/food.png'
import clothess from '../images/clothess.png'
import health from '../images/health.png'

function Home() {
    return (
        <div>



            <div>
                <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                  
                    {/* <p>asdfghhfgdxfchgvhbnbjftdr</p> */}
                    <div class="carousel-inner">
                    <nav class="navbar ">
                        <div class="container-fluid">

                            <a class="navbar-brand ms-5" href="#">ABOUT US</a>
                            <a class="navbar-brand pe-5 me-5 " href="#">CONTACT US</a>
                            <Link to='/signup'>
                                <a class="navbar-brand ms-5" href="/signup">Signup</a>
                            </Link>

                            <a class="navbar-brand me-5 pe-5 mx-5" href="#">Country Welfare</a>

                            <a class="navbar-brand ps-5 me-5 mx-5" href="#">BLOG</a>
                            <a class="navbar-brand me-5" href="#">EVENT</a>

                        </div>
                    </nav>

                        <div class="carousel-item active">

                            <img src={hands} class="d-block w-100" alt="..." />
                            

                        </div>
                        <div class="carousel-item">
                            <img src={people} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={ash} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={child} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={med} class="d-block w-100" alt="..." />
                        </div>
                    </div>


                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>

            </div>

            <button type="button" class="btn btn-primary btn-lg me-5 pe-5 ps-5 mx-5">Become a donor</button>
            <button type="button" class="btn btn-primary btn-lg me-5 pe-5 ps-5 mx-5">Become a volunteer</button>
            <h3 className='text-start mt-5 ms-5'>About us</h3>
            <p className='text-start ms-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.Mattis molestie a iaculis at erat pellentesque
                adipiscing commodo. Dictum sit amet justo donec enim diam.
            </p>
            <div>
                <div className='row counts'>
                    <div className='col-3'><h2>7</h2><span>countries</span></div>
                    <div className='col-3'><h2>32</h2><span>states</span></div>
                    <div className='col-3'><h2>240+</h2><span>Districts</span></div>
                    <div className='col-3'><h2>100+</h2><span>programs</span></div>

                </div>
            </div>
            <div className='pht-border mt-5'>
                <img calssName='' src={volunter} alt="image" />
                <div></div>
            </div>
            <div className='row mt-5'>
                <div className='col-4'>
                   
                        <img clasName="food-i" src={food} style={{ width:"331px", borderTopRightRadius:"47px"}} />
                        <div className='card-donates ms-5'>
                        <div className='card-body'>
                            <p className="donate-mtr">Lorem ipsum dolor sit amet</p>
                            <small className='donate-hst'>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                             quis nostrud exercitation ullamco laboris</small>
                            {/* <img src={}/> */}
                            <button type="button" class="btn btn-primary btn-lg btn-donate mt-2 mb-2">Food</button>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                  
                        <img clasName="food-i" src={clothess} style={{ width:"331px", borderTopRightRadius:"47px"}}/>
                        <div className='card-donates ms-5'>
                        <div className='card-body'>
                            <p className="donate-mtr">Lorem ipsum dolor sit amet</p>
                            <small className='donate-hst'>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                             quis nostrud exercitation ullamco laboris</small>
                            <button type="button" class="btn btn-primary btn-lg  btn-donate mt-2 mb-2">Clothes</button>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                  
                        <img clasName="food-i" src={health} style={{ width:"331px", borderTopRightRadius:"47px"}}/>
                        <div className='card-donates ms-5'>
                        <div className='card-body'>
                            <p className="donate-mtr" >Lorem ipsum dolor sit amet</p>
                            <small className='donate-hst'>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                             quis nostrud exercitation ullamco laboris</small>
                            <button type="button" class="btn btn-primary btn-lg btn-donate  mt-2 mb-2">Health</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-4'>
                   
                        <img clasName="" src={stationary} />
                        <div className='card-donates ms-5'>
                        <div className='card-body'>
                            <p className="donate-mtr">Lorem ipsum dolor sit amet</p>
                            <small className='donate-hst'>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                             quis nostrud exercitation ullamco laboris</small>
                            <button type="button" class="btn btn-primary btn-lg btn-donate  mt-2 mb-2">Stationary</button>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
         
                        <img clasName="" src={gadgets} />
                        <div className='card-donates ms-5'>
                        <div className='card-body'>
                            <p className="donate-mtr">Lorem ipsum dolor sit amet</p>
                            <small className='donate-hst'>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                             quis nostrud exercitation ullamco laboris</small>
                            <button type="button" class="btn btn-primary btn-lg btn-donate mt-2 mb-2">Gadgets</button>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                  
                        <img clasName="" src={footer} />
                        <div className='card-donates ms-5'>
                        <div className='card-body'>
                            <p className="donate-mtr">Lorem ipsum dolor sit amet</p>
                            <small className='donate-hst'>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                             quis nostrud exercitation ullamco laboris</small>
                            <button type="button" class="btn btn-primary btn-lg btn-donate mt-2 mb-2">Footwear</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='row mt-5'>
                    <div className='col-7'>
                        <img className="clothe-img " src={clothes} alt="image" />
                    </div>
                    <div className='col-5 mt-4'>
                        <h4 className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4>
                        <p className='p-letters text-start'>Lorem ipsum dolor sit amet,  </p>
                        <p className='p-letters text-start'>18-03-2023</p>
                        <p className='p-letters text-start'>MADHAPUR</p>
                        <p className='p-letters text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </div>

            <div className='vlt-img text-end mt-5'>
                <img src={volunter2} style={{ width: "400px" }} alt="image" />
            </div>
            <div className='ellipse-img row'>
                <div className='col-2'><img src={Ellipse2} alt="image" /></div>
                <div className='col-2'><img src={Ellipse3} alt="image" /></div>
                <div className='col-2'><img src={Ellipse4} alt="image" /></div>
                <div className='col-2'><img src={Ellipse5} alt="image" /></div>
                <div className='col-2'><img src={Ellipse6} alt="image" /></div>
            </div >
            <div className='row mt-5'>
                <div className='col-6'>
                    <img src={Selfhelp} />
                </div>
                <div className='col-6'>
                    <h1 className='text-start mt-5'>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                    <p className='text-start '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.</p>
                </div>
            </div>
            <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='row mark'>
                <div className='col-4 pe-5'>
                    <img src={download} />
                </div>
                <div className='col-8 text-start'>
                    <h4 style={{ color: "#FFFFFF" }}>Mark Grey Sloan</h4>
                    <h5 style={{ color: "#FFFFFF" }}>Founder & trustee</h5>
                    <p style={{ color: "#FFFFFF" }}>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.</p>
                </div>

            </div>
            <div className='form-clr mt-5 text-start'>
                <h2 className='ms-5'>CONTACT US</h2>
                <div className="form-data col-lg-6">
                    <div className="mb-3">
                        <label className="form-label">
                            Tech Interviewer Name
                        </label>
                        <input
                            type="text"
                            className="form-control readonlydes"
                            id="" readOnly
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                </div>
                <div className="form-data col-lg-6">
                    <div className="mb-3">
                        <label className="form-label">
                            Tech Interviewer Name
                        </label>
                        <input
                            type="text"
                            className="form-control readonlydes"
                            id="" readOnly
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                </div>
                <div className="form-data col-lg-6">
                    <div className="mb-3">
                        <label className="form-label">
                            Tech Interviewer Name
                        </label>
                        <input
                            type="text"
                            className="form-control readonlydes"
                            id="" readOnly
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                </div>
                <div className="form-data col-lg-6">
                    <div className="mb-3">
                        <label className="form-label">
                            Tech Interviewer Name
                        </label>
                        <input
                            type="text"
                            className="form-control readonlydes"
                            id="" readOnly
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                </div>
                <div class="d-grid gap-2 col-4 mx-auto mt-5 pb-5">
                    <button class="clr-btn" type="button">Submit</button>
                </div>
            </div>
            <div>
                <footer className='foot'>

                </footer>
            </div>
        </div>
    )
}

export default Home
