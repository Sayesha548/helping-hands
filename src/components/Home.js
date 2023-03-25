import React from 'react'
import Footer from './Footer'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>


            <div>
                <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                    <nav class="navbar ">
                        <div class="container-fluid">
                        
                            <a class="navbar-brand ms-5" href="#">About us</a>
                            <a class="navbar-brand pe-5 me-5 " href="#">Contact us</a>
                            <Link to='/signup'>
                                <a class="navbar-brand ms-5" href="/signup">Signup</a>
                            </Link>

                            <a class="navbar-brand me-5 pe-5 mx-5" href="#">Helping Hands</a>

                            <a class="navbar-brand ps-5 me-5 mx-5" href="#">Blog</a>
                            <a class="navbar-brand me-5" href="#">Event</a>

                        </div>
                    </nav>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="team.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="people.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="ash.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="child.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="med.png" class="d-block w-100" alt="..." />
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
                <div className='row'>
                    <div className='col-6 pe-5 text-end'>
                        <img src="girl.png" class="block " alt="..." />
                    </div>
                    <div className='col-6 pe-5 text-start'>
                        <img src="boys.png" class="block" alt="..." />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
