import React from 'react'
import Banner from '../footer/Banner'
const LearnableBody = () => {
    return (
        <React.Fragment>
            <div class="banner row flex align-center bg-saffron flex-center" id="ad-banner-mobile">
        <div class="col space-between-large">
            <h2 class="navy-blue medium-text">Coming soon: Learnable ‘20</h2>
            <p>We've started taking in applications for the next batch of learnable interns. Applications are on till the 21st of Febuary</p>
        </div>
        <div class="col">
            <p>Click link to download...</p>
            <h2 class="underline navy-blue medium-text"><a href="/">Learnable ‘20 Brochure</a></h2>
        </div>
    </div>
    <main class="main">
        <div class="container">
            <h2 class="large-text">Everything is Learnable</h2>
        </div>
        <div class="flex flex-column">
            <p class="row text-contain">Learnable is the perfect product development internship program brought to you by Genesys.</p>
            <div class="flex space-below-medium">
                <div class="col-1 skip"></div>
                <picture class="wrapper col-11">
                    <source media="(max-width: 599px)"  srcset={require('../../assets/team_bond_mobile.png')} />
                    <source media="(min-width: 800px)" srcset={require('../../assets/team_bond_desktop.png')} />
                    <img class="img" src={require('../../assets/team_bond_desktop.png')} alt="team bond" />
                </picture>
            </div>
        </div>
        <div class="bg-grey wrapper flex align-end container-fluid" id="container-fluid-id">
            <div class="col">
                <h4 class="light-green">305</h4>
                <p>Young Software Developers Trained</p>
            </div>
            <div class="col">
                <h4 class="light-green">305</h4>
                <p>Young Software Developers Trained</p>
            </div>
            <div class="col">
                <h4 class="light-green">305</h4>
                <p>Young Software Developers Trained</p>
            </div>
            <div class="col">
                <h4 class="light-green">305</h4>
                <p>Young Software Developers Trained</p>
            </div>
        </div>
    </main>
            <section class="flex row section align-center flex-reverse" id="grid-id">
        <div class="col col-img-wrapper center">
            <img src={require('../../assets/man_rounded_photo.png')} alt="man rounded" class="img-fluid" />
        </div>
        <div class="col">
            <h3>We Make People Great</h3>
            <p>As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy of Nigeria, Learnable is a 6-month product development training program with an emphasis on software programming and product design. It is for outstanding young individuals who are passionate about building a career in the software industry. <br /><br /> 
                We primarily educate and groom software developers and designers, preparing them for the industry. 
            </p>
            <p><a href="learnable">Learn more</a></p>
        </div>
    </section>
    <section class="bg-grey flex row section align-center" id="grid-id">
        <div class="col col-img-wrapper">
            <img src={require('../../assets/vr_experience.png')} alt="vr experience" class="img-fluid" />
        </div>
        <div class="col">
            <h3>An Unusual Learning Experience</h3>
            <p>
                At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.<br /><br />
                Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn.
            </p>
            <p><a href="learnable">Learn more</a></p>
        </div>
    </section>
    <section class="flex row section align-center flex-reverse" id="grid-id">
        <div class="col grid" id="grid-box-id">
            <div class="item-a bg-navy-blue box">
                <p class="">genesys ignite</p>
            </div>
            <div class="item-b bg-carribean-green box">
                <p class="">genesys ignite</p>
            </div>
            <div class="item-c bg-saffron box">
                <p class="">genesys ignite</p>
            </div>
            <div class="item-d bg-dark-purple box">
                <p class="">genesys ignite</p>
            </div>
            <div class="item-e bg-metal box">
                <p class="">genesys ignite</p>
            </div>
            <div class="item-f bg-vivid-tangelo box">
                <p class="">genesys ignite</p>
            </div>
        </div>
        <div class="col">
            <p>For  Developers</p>
            <h3>Learn to Build Software the Right Way</h3>
            <p>We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will empower you to create amazing software the right way.<br /><br />
                We believe in learning through experimentation. Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive.
            </p>
            <p><a href="learnable">HERE'S HOW</a></p>
        </div>
    </section>
    <section class="flex row section align-center" id="grid-id">
        <div class="col grid" id="grid-box-id">
            <div class="item-a bg-navy-blue box">
                <p class="">genesys ignite</p>
            </div>
            <div class="item-b bg-carribean-green box">
                <p class="">genesys ignite</p>
            </div>
            <div class="item-c bg-saffron box">
                <p class="">genesys ignite</p>
            </div>
            <div class="item-d bg-metal box">
                <p class="">genesys ignite</p>
            </div>
            <div class="item-e bg-sunset-orange box">
                <p class="">genesys ignite</p>
            </div>
            <div class="item-f bg-carribean-green box">
                <p class="">genesys ignite</p>
            </div>
        </div>
        <div class="col">
            <p>For  Developers</p>
            <h3>Learn to Build Software the Right Way</h3>
            <p>We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will empower you to create amazing software the right way.<br /><br />
                We believe in learning through experimentation. Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive.
            </p>
            <p><a href="learnable">HERE'S HOW</a></p>
        </div>
    </section>
    <section class="flex row section align-center flex-reverse" id="grid-id">
        <div class="col col-img-wrapper">
            <img src={require('../../assets/men_brainstorm2.png')} alt="men brainstorming" class="img-fluid" />
        </div>
        <div class="col">
            <h3>Who is Eligible?</h3>
            <p>To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.<br /><br />
                To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency.
            </p>
            <p><a href="learnable">HERE'S HOW</a></p>
        </div>
    </section>
    <section class="bg-vivid-tangelo flex row section align-center" id="grid-id">
        <div class="col col-img-wrapper">
            <img src={require('../../assets/happy_ladies_2.png')} alt="together we can" class="img img-fluid" />
        </div>
        <div class="col">
            <h3>Our Culture</h3>
            <p>Our culture are the unspoken things that make us who we are at Genesys. To become one of us, you need to be like the rest of us. We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. We are passionate, candid and we trust in the power of collaboration.</p>
        </div>
    </section>
    <section class="flex row section align-center flex-reverse" id="grid-id">
        <div class="col grid2">
            <div>
                <img src={require('../../assets/grid-item-a1.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a2.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a3.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a4.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a5.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a6.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a7.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a8.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a9.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a10.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a11.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a12.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a13.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a14.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a15.png')} alt="men brainstorming" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-a16.png')} alt="men brainstorming" class="img" />
            </div>
        </div>
        <div class="col">
            <h3>Who is Eligible?</h3>
            <p>To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.<br /><br />
                To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency.
            </p>
            <p><a href="learnable">HERE'S HOW</a></p>
        </div>
    </section>
    <section class="bg-grey flex row section align-center" id="grid-id">
        <div class="col grid3">
            <div>
                <img src={require('../../assets/grid-item-c1.png')} alt="team member" class="img" />
                <h4>Nnamdi</h4>
                <p>Managing Director</p>
            </div>
            <div>
                <img src={require('../../assets/grid-item-c2.png')} alt="team member" class="img" />
                <h4>Nnamdi</h4>
                <p>Managing Director</p>
            </div>
            <div>
                <img src={require('../../assets/grid-item-c3.png')} alt="team member" class="img" />
                <h4>Nnamdi</h4>
                <p>Managing Director</p>
            </div>
            <div>
                <img src={require('../../assets/grid-item-c4.png')} alt="team member" class="img" />
                <h4>Nnamdi</h4>
                <p>Managing Director</p>
            </div>
            <div>
                <img src={require('../../assets/grid-item-c5.png')} alt="team member" class="img" />
                <h4>Nnamdi</h4>
                <p>Managing Director</p>
            </div>
            <div>
                <img src={require('../../assets/grid-item-c6.png')} alt="team member" class="img" />
                <h4>Nnamdi</h4>
                <p>Managing Director</p>
            </div>
        </div>
        <div class="col">
            <h3>An Unusual Learning Experience</h3>
            <p>
                At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.<br /><br />
                Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn.
            </p>
            <p><a href="learnable">Learn more</a></p>
        </div>
    </section>
    <section class="flex row section align-center flex-reverse" id="grid-id">
        <div class="col grid2">
            <div>
                <img src={require('../../assets/grid-item-b1.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b2.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b3.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b4.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b5.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b6.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b7.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b8.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b9.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b10.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b11.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b12.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b13.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b14.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b15.png')} alt="team work" class="img" />
            </div>
            <div>
                <img src={require('../../assets/grid-item-b16.png')} alt="team work" class="img" />
            </div>
        </div>
        <div class="col">
            <h3>Who is Eligible?</h3>
            <p>To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.<br /><br />
                To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express the ability to produce quality stuff in good time with high consistency.
            </p>
            <p><a href="learnable">HERE'S HOW</a></p>
        </div>
    </section>
    <section class="bg-navy-blue flex row section align-center" id="grid-id">
        <div class="col col-img-wrapper">
            <img src={require('../../assets/togetherWeCan.png')} alt="together we can" class="img img-fluid" />
        </div>
        <div class="col">
            <h3>The Best Team In The World</h3>
            <p>Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.</p>
            <p><a href="learnable">SEE TEAM</a></p>
        </div>
    </section>
    <section class="section">
        <h3 class="space-below-sm faq-top-text">FAQ</h3>
        <div class='faq'>
            <input id='faq-a' type='checkbox' />
            <label for='faq-a'>
              <p class="faq-heading">How many people can attend a course?</p>
              <div class='faq-arrow'></div>
                <p class="faq-text">You can purchase an individual account or a site license by emailing us at welcome@brainitz.com One of our staff will be in touch shortly to set-up your account. We accept credit card, purchase order, or check. Learn more on our pricing page.<br /><br />We also offer professional development trainings that include the opportunity to pursue credit while also receiving a discounted license. If you have more questions, please feel free to submit a request!</p>
            </label>
            <input id='faq-b' type='checkbox' />
            <label for='faq-b'>
              <p class="faq-heading">What’s the learning experience like?</p>
              <div class='faq-arrow'></div>
                <p class="faq-text">Yes, we have professional development trainings available almost every month. Teachers can take our online course that will train you on the theory and practice of putting lessons online, often called flipped or blended learning. These trainings also include in depth instruction on how to use Brainitz.<br /><br />Online training start at $45, include a 1 year subscription Brainitz, and come with 1 hour of advancement credit available through Adams State University or $55. For dates on upcoming trainings, email us at welcome@brainitz.com. If you have more questions, please feel free to submit a request!</p>
            </label>
            <input id='faq-c' type='checkbox' />
            <label for='faq-c'>
              <p class="faq-heading">Who are the coaches?</p>
              <div class='faq-arrow'></div>
                <p class="faq-text">Yes, Brainitz accepts purchase order for site licenses. Please set the PO, including a description of the order to welcome@brainitz.com and we will invoice you for the amount. Once we send the invoice, someone will be in touch to set up your Brainitz account.<br /><br />You can learn more about our licensing structure on our pricing page. If you have more questions, please feel free to submit a request!</p>
            </label>
            <input id='faq-d' type='checkbox' />
            <label for='faq-d'>
              <p class="faq-heading">How far in advance should we book?</p>
              <div class='faq-arrow'></div>
                <p class="faq-text">To get setup with Brainitz, instructors will need a computer with working Internet connection and a web browser. <br /><br />Students will need any device with a web browser, ranging from smartphones to tablets and personal computer, as well as an Internet or cellular connection. <br /><br />For the be st experience, we recommend using the latest version of Google Chrome, but it should work on a recent version of any major browser. If you have any more questions, please feel free to submit a request! </p>
            </label>
            <input id='faq-e' type='checkbox' />
            <label for='faq-e'>
              <p class="faq-heading">Can you customize your courses?</p>
              <div class='faq-arrow'></div>
                <p class="faq-text">Yes, you can add a PowerPoint to Brainitz. The easiest way is to record your PowerPoint presentation using a screen capture program like www.screencast-o-matic.com You can view our tutorial on how to do this here. <br /><br />This will allow you to record your PowerPoint as a video with your voice describing the slides. You will then be able to upload the video on Brainitz and create an interactive video lesson. If you have any more questions, please feel free to submit a request!</p>
            </label>
        </div>
        <div class="faq-link center">
            <a href="/">See More</a>
        </div>         
    </section>
    <section class="bg-grey section space-below-medium">
        <div class="txt-box space-below-medium">
            <h2>Journal</h2>
            <p><a href="/">view all</a></p>
        </div>
        <div class="flex" id="grid-id">
            <div class="col">
                <img src={require('../../assets/woman_showcase_item.png')} alt="woman showcase item" class="img img-fluid" />
                <p><a href="/">CodeVille</a></p>
                <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                <p>David Mong, Apr 9, 2020</p>
            </div>
            <div class="col">
                <img src={require('../../assets/men_playing.png')} alt="men playing like boys" class="img img-fluid" />
                <p><a href="/">CodeVille</a></p>
                <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                <p>David Mong, Apr 9, 2020</p>
            </div>
            <div class="col">
                <img src={require('../../assets/laptop_showcase_madrid.png')} alt="laptop showcase madrid" class="img img-fluid" />
                <p><a href="/">CodeVille</a></p>
                <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                <p>David Mong, Apr 9, 2020</p>
            </div>
            <div class="col">
                <img src={require('../../assets/man_working_laptop.png')} alt="man working laptop" class="img img-fluid" />
                <p><a href="/">CodeVille</a></p>
                <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                <p>David Mong, Apr 9, 2020</p>
            </div>
        </div>
    </section>
    <section class="banner-min flex align-center flex-center" id="grid-box-id">
        <div class="col-1">
            <p class="underline">Mentioned in</p>
        </div>
        <div class="col-11 flex gap brands">
            <div class="item-brand">
                <img src={require('../../assets/fast_company.png')} alt="fast_company" class="img img-fluid" />
            </div>
            <div class="item-brand">
                <img src={require('../../assets/ux_magazine.png')} alt="ux_magazine" class="img img-fluid" />
            </div>
            <div class="item-brand">
                <img src={require('../../assets/wired.png')} alt="wired" class="img img-fluid" />
            </div>
            <div class="item-brand">
                <img src={require('../../assets/webvisions.png')} alt="webvisions" class="img img-fluid" />
            </div>
            <div class="item-brand">
                <img src={require('../../assets/interaction_america.png')} alt="interaction_america" class="img img-fluid" />
            </div>
        </div>
    </section>
    <Banner />
        </React.Fragment>
    )
}

export default LearnableBody;