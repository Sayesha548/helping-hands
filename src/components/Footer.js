import React from 'react'

function Footer() {
    return (
        <div>

            <div class="card">
                <div class="card-footer" style={{ backgroundColor: "#252525", width: "1348px", height: "200px", color: "white" }}>

                    <div className='row'>
                        <div className='col-3'>
                            <u className='pt-5'><span className=''>ABOUT US</span></u>

                        </div>
                        <div className='col-3'>
                            <u><span>RECENT BLOG</span></u>
                        </div>
                        <div className='col-3'>

                          <u>  <span>RECENT BLOG</span></u>
                        </div>
                        <div className='col-3'>
                           <u> <span className='text-end'>RECENT BLOG</span></u>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer
