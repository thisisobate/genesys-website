import React from 'react'

const LandingBody = () => {
    return (
        <React.Fragment>
            <main>
                <div class="container">
                    <h2>Genesys provides opportunities for young Nigerian techies and opportunities to grow and innovate.</h2>
                </div>
                <div class="flex flex-column">
                    <p class="row text-contain">We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.</p>
                    <div class="flex space-below-medium">
                        <div class="col-1 skip"></div>
                        <picture class="wrapper col-11">
                            <source media="(max-width: 599px)" srcset={require('../../assets/happy_ladies_mobile.png')} />
                            <source media="(min-width: 800px)" srcset={require('../../assets/happy_ladies_desktop.png')} />
                            <img class="img" src={require('../../assets/happy_ladies_desktop.png')} alt="Happy ladies" />
                        </picture>
                    </div>
                </div>
            </main>
            <section class="flex row section align-center" id="grid-id">
                <div class="col col-img-wrapper">
                    <img src={require('../../assets/man-smiling.jpg')} alt="man man-smiling" class="img img-fluid" />
                </div>
                <div class="col">
                    <h3>Learnable</h3>
                    <p>Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.</p>
                    <p><a href="learnable">Learn more</a></p>
                </div>
            </section>
            <section class="bg-grey flex flex-reverse row section align-center" id="grid-id">
                <div class="col col-img-wrapper">
                    <img src={require('../../assets/workspace.png')} alt="agora workspace" class="img img-fluid" />
                </div>
                <div class="col">
                    <h3>Agora</h3>
                    <p>Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.</p>
                    <p><a href="learnable">Learn more</a></p>
                </div>
            </section>
            <section class="flex row section align-center" id="grid-id">
                <div class="col col-img-wrapper">
                    <img src={require('../../assets/men_brainstorm.png')} alt="men brainstorming" class="img img-fluid" />
                </div>
                <div class="col">
                    <h3>startzone</h3>
                    <p>Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.</p>
                    <p><a href="learnable">HERE'S HOW</a></p>
                </div>
            </section>
            <section class="flex row section align-center flex-reverse zero-top-pad" id="grid-id">
                <div class="col large-text">
                    <h1>other things we do</h1>
                </div>
                <div class="col grid grid-gap" id="grid-id">
                    <div class="item-a underline">
                        <img src={require('../../assets/large_event_attendees.png')} alt="large event attendees" class="img img-fluid" id="img-id" />
                        <p class="display-none"><a href="ignite">genesys ignite</a></p>
                    </div>
                    <div class="item-b">
                        <p><a href="ignite">genesys ignite</a></p>
                    </div>
                    <div class="item-c underline">
                        <img src={require('../../assets/happy_white_boy.png')} alt="happy white boy" class="img img-fluid" id="img-id" />
                        <p><a href="codeville">CodeVille</a></p>
                    </div>
                    <div class="item-d underline">
                        <img src={require('../../assets/ladies_raise_hands.png')} alt="ladies raise hands" class="img img-fluid" id="img-id" />
                        <p><a href="pink">Pink summer of code</a></p>
                    </div>
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
        </React.Fragment>
    )
}

export default LandingBody;