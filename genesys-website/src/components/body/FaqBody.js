import React from 'react';
import Banner from '../footer/Banner';

const FaqBody = () => {
    return (
        <React.Fragment>
            <section class="flex row section align-center flex-reverse" id="grid-id">
                <div class="col col-img-wrapper center">
                    <img src={require('../../assets/white_hand_raising.png')} alt="white hand raising" class="img-fluid" />
                </div>
                <div className="col large-text-x">
                    <h2 class="">FAQ</h2>
                </div>
            </section>
            <section className="space-below-large" id="faq-container">
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
                    <input id='faq-f' type='checkbox' />
                    <label for='faq-f'>
                        <p class="faq-heading">Can you customize your courses?</p>
                        <div class='faq-arrow'></div>
                        <p class="faq-text">Yes, you can add a PowerPoint to Brainitz. The easiest way is to record your PowerPoint presentation using a screen capture program like www.screencast-o-matic.com You can view our tutorial on how to do this here. <br /><br />This will allow you to record your PowerPoint as a video with your voice describing the slides. You will then be able to upload the video on Brainitz and create an interactive video lesson. If you have any more questions, please feel free to submit a request!</p>
                    </label>
                    <input id='faq-g' type='checkbox' />
                    <label for='faq-g'>
                        <p class="faq-heading">Can you customize your courses?</p>
                        <div class='faq-arrow'></div>
                        <p class="faq-text">Yes, you can add a PowerPoint to Brainitz. The easiest way is to record your PowerPoint presentation using a screen capture program like www.screencast-o-matic.com You can view our tutorial on how to do this here. <br /><br />This will allow you to record your PowerPoint as a video with your voice describing the slides. You will then be able to upload the video on Brainitz and create an interactive video lesson. If you have any more questions, please feel free to submit a request!</p>
                    </label>
                    <input id='faq-h' type='checkbox' />
                    <label for='faq-h'>
                        <p class="faq-heading">Can you customize your courses?</p>
                        <div class='faq-arrow'></div>
                        <p class="faq-text">Yes, you can add a PowerPoint to Brainitz. The easiest way is to record your PowerPoint presentation using a screen capture program like www.screencast-o-matic.com You can view our tutorial on how to do this here. <br /><br />This will allow you to record your PowerPoint as a video with your voice describing the slides. You will then be able to upload the video on Brainitz and create an interactive video lesson. If you have any more questions, please feel free to submit a request!</p>
                    </label>
                    <input id='faq-i' type='checkbox' />
                    <label for='faq-i'>
                        <p class="faq-heading">Can you customize your courses?</p>
                        <div class='faq-arrow'></div>
                        <p class="faq-text">Yes, you can add a PowerPoint to Brainitz. The easiest way is to record your PowerPoint presentation using a screen capture program like www.screencast-o-matic.com You can view our tutorial on how to do this here. <br /><br />This will allow you to record your PowerPoint as a video with your voice describing the slides. You will then be able to upload the video on Brainitz and create an interactive video lesson. If you have any more questions, please feel free to submit a request!</p>
                    </label>
                </div>
            </section>
            <Banner />
        </React.Fragment>
    )
}

export default FaqBody;