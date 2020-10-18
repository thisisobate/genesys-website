import React from 'react'

const Banner = (props) => {
    return (
        <div class="banner row flex">
            <div class="col-1 skip"></div>
            <div className={`bg-saffron col-11 flex align-center ${props.bgColor}`} id="grid-id">
                <div class="col medium-text">Stay up to date on what we are doing and new learning opportunities</div>
                <div class="col">
                    <form class="form flex" action="/" id="grid-id">
                        <div class="form-input space-between-large">
                            <input class="email-input" type="email" placeholder="Email Address" required />
                            <p>View Privacy Policy</p>
                        </div>
                        <input class="form-submit btn" type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Banner;