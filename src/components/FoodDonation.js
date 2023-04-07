import React from 'react'
import food from '../images/food.png'
import team from '../images/team.png'
import Ellipse2 from '../images/Ellipse2.png'
import profile from '../images/profile.png'

function FoodDonation() {
    return (
        <div>

            <div className="">
                <div className='' style={{backgroundColor:"#01BFBDE6"}}>
                <nav class="navbar fixed-top " style={{backgroundColor:"#01BFBDE6", borderBottomRightRadius:"70px"}} >
                    <div class="container-fluid" >
                        {/* <a class="navbar-brand" href="#">Fixed top</a> */}
                        <img className="profile-nav" src={profile}  />
                    </div>
                </nav>
                </div>
                <div className='row'>
                    <div className='col-6 fd-img text-start mt-3'>
                        <img calssName="donation-form-img" src={team} style={{ width: "639px", height: "624px" }} />
                    </div>
                    <div className='col-6 form-detailss mt-5 pt-4'>
                        <div className='me-5'>
                            <h1 style={{ color: "#4B4848" }}>Food Donation</h1>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-3 col-form-label">Food Name</label>
                                <div class="col-sm-9">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-3 col-form-label">Food Type</label>
                                <div class="col-sm-9">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-3 col-form-label">Quantity</label>
                                <div class="col-sm-9">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-3 col-form-label">No. Of items</label>
                                <div class="col-sm-9">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-3 col-form-label">Donor Name</label>
                                <div class="col-sm-9">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-3 col-form-label">PickUp</label>
                                <div class="col-sm-9">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-3 col-form-label">Pincode</label>
                                <div class="col-sm-9">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div class="form-check text-start">
                                <input class="form-check-input-details" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label-details ms-3" for="defaultCheck1">
                                    I accept that I take responsibility for the donated items wholly
                                </label>
                            </div>
                            <div class="d-grid gap-2 col-11 mx-auto me-1 mt-4">
                                <button class="btn btn-primary" type="button">Button</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FoodDonation
