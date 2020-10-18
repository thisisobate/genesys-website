import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div class="flex row section" id="grid-id">
                <div class="col flex" id="grid-id">
                    <ul class="col footer-link-mobile">
                        <li><a href="/learnable">BUILD SOFTWARE</a></li>
                        <li><a href="/agora">DESIGN DIFFERENT</a></li>
                        <li><a href="/startzone">APPLY YOUR KNOWLEDGE</a></li>
                        <li><a href="/about">FAQ</a></li>
                    </ul>
                    <div class="col">
                        <p>Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria</p>
                        <p><a href="#">GET IN TOUCH</a></p>
                    </div>
                </div>
                <div class="col flex" id="grid-id">
                    <div class="col col-img-wrapper">
                        <img src={require('../../assets/team_converse.png')} alt="team converse" class="img img-fluid" id="footer-img" />
                    </div>
                    <div class="col">
                        <p>Learnable is proud to be a collaborative effort of all the arms of our product team</p>
                        <p><a href="learnable">HEAD TO DEVSTUDIO</a></p>
                    </div>
                </div>
            </div>
            <div class="flex flex-column">
                <div class="col flex space-below-sm flex-center">
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-vimeo"></i>
                </div>
                <div class="col flex flex-center">
                    <p class="">Genesys 2020</p>
                    <p>Privacy statement</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;