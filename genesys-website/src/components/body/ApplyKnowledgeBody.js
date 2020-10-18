import React from 'react';
import Banner from '../footer/Banner';

const ApplyKnowledgeBody = () => {
    return (
        <React.Fragment>
            <section class="flex row section align-center flex-reverse" id="grid-id">
                <div class="col col-img-wrapper center">
                    <img src={require('../../assets/laptop_active.png')} alt="man rounded" class="img-fluid" />
                </div>
                <div className="col large-text-x">
                    <h2 class="">Apply Your Knowledge</h2>
                </div>
            </section>
            <div class="col-thin-x">
                <h3>We Make People Great</h3>
                <p>
                Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone.
                </p>
            </div>
            <div class="container">
                <h2>“You are someone people can count on. Every day, you come in ready to make great things happen.”</h2>
            </div>
            <section className="section-x align-center">
                <div className="col">
                    <img src={require('../../assets/library.png')} alt="code on screen" class="img-fluid" />
                </div>
                <div className="col col-thin">
                    <div>
                        <h2>How To Get In</h2>
                        <p>We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people.</p>
                        <br /><br />
                        <h2>Online Application</h2>
                        <p>Introduce yourself to us by filling out our application form. When you’re done filling out the form, proceed to download our prep curriculum that contains everything you need to prepare for the physical and technical assessment.</p>
                        <br /><br />
                        <h2>Phone Call Interviews</h2>
                        <p>We will reach out to you to discuss possible opportunities, ascertain where you fit in with us, and answer any questions you might have about the program. It’s supposed to be a chat, getting nervous defeats the aim.</p>
                        <br /><br />
                        <h2>Final Assessment</h2>
                        <p>At this stage, we’ll get to meet you in person for the first time. You’ll be invited to the hub for a physical assessment that includes a technical assessment, a psychometric test and a face-to-face chat with our team.</p>
                        <br /><br />
                        <h2>Get In</h2>
                        <p>If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. We will join you on your journey to build that career of your dreams and provide all the help, support and love that we can muster along the way!</p>
                        
                    </div>
                </div>
            </section>

        <Banner />
        </React.Fragment>
    )
}

export default ApplyKnowledgeBody;