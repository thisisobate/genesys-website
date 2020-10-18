import React from 'react';
import Banner from '../footer/Banner';

const ProductDesignBody = () => {
    return (
        <React.Fragment>
            <section class="flex row section align-center flex-reverse" id="grid-id">
                <div class="col col-img-wrapper center">
                    <img src={require('../../assets/man_rounded_2.png')} alt="man rounded" class="img-fluid" />
                </div>
                <div className="col large-text-x">
                    <h2 class="">The Learnable Product Designer</h2>
                </div>
            </section>
            <div class="col-thin-x">
                <h3>We Make People Great</h3>
                <p>Creativity means a lot to us. So we look for people who can think both logistically and artistically, and who know that limits are made to be pushed. We value skill and aptitude, but we honor those who care about working with their team to add the Genesys flavour to every project. <br /><br />
                As a developer, being part of the team exposes you to a range of diverse, like-minded talented people who are sure to make the experience fun for you. You’ll get a shot at building amazing things, developing yourself, learning on the job, while exchanging healthy jokes and having random hangouts once in a while.
                    </p>
            </div>
            <div class="container">
                <h2>“You are someone people can count on. Every day, you come in ready to make great things happen.”</h2>
            </div>
            <section className="section-x align-center">
                <div className="col">
                    <img src={require('../../assets/book.png')} alt="code on screen" class="img-fluid" />
                </div>
                <div className="col col-thin">
                    <h3 className="medium-text">We expect you to…</h3>
                    <p>
                        Play nice with other people. <br /><br />
                        Be an actively engaging person. That means you are present, motivated, and social. You know how to communicate effectively with your teammates. <br /><br />

                        Love to code. You understand the basics of programming and object-oriented design and development.<br /><br />

                        Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly.<br /><br />

                        Be innately curious. Your love for technology is insatiable, so you’re always researching and experimenting. Learning new technical skills while on the job is something you look forward to.<br /><br />

                        Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing.
                    </p>
                </div>
            </section>

        <Banner />
        </React.Fragment>
    )
}

export default ProductDesignBody;