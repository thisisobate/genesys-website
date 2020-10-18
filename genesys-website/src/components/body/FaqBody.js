import React from 'react';
import Banner from '../footer/Banner';

const FaqBody = () => {
    return (
        <React.Fragment>
            <section class="flex row bg-grey section align-center flex-reverse" id="grid-id">
                <div class="center journal-btn">
                    <p class="btn">CATEGORIES</p>
                </div>
                <div className="col large-text-x">
                    <h2 class="">Apply Your Knowledge</h2>
                </div>
            </section>
            <section class="flex row section align-center" id="grid-id">
                <div class="col col-img-wrapper center">
                    <img src={require('../../assets/library.png')} alt="Library of books" class="img-fluid" />
                </div>
                <div className="col">
                    <p className="underline">Inspiration</p>
                    <h2 class="medium-text">Learn Design Thinking like a Pro and Build Projects that People will care about</h2>
                    <br /><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien arcu vitae orci at molestie. Pharetra quisque donec accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. Vulputate euismod commodo donec tincidunt et, aliquam. Eget scelerisque netus habitant dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper. Lacus.</p>
                </div>
            </section>
            <section className="section">
            <div class="flex" id="grid-id">
                <div class="col">
                    <img src={require('../../assets/woman_showcase_item.png')} alt="woman showcase item" class="img img-fluid" />
                    <p><a href="codeville">CodeVille</a></p>
                    <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                    <p>David Mong, Apr 9, 2020</p>
                </div>
                <div class="col">
                    <img src={require('../../assets/men_playing.png')} alt="men playing like boys" class="img img-fluid" />
                    <p><a href="codeville">CodeVille</a></p>
                    <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                    <p>David Mong, Apr 9, 2020</p>
                </div>
                <div class="col">
                    <img src={require('../../assets/laptop_showcase_madrid.png')} alt="laptop showcase madrid" class="img img-fluid" />
                    <p><a href="codeville">CodeVille</a></p>
                    <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                    <p>David Mong, Apr 9, 2020</p>
                </div>
                <div class="col">
                    <img src={require('../../assets/man_working_laptop.png')} alt="man working laptop" class="img img-fluid" />
                    <p><a href="codeville">CodeVille</a></p>
                    <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                    <p>David Mong, Apr 9, 2020</p>
                </div>
            </div>
            <div class="flex" id="grid-id">
                <div class="col">
                    <img src={require('../../assets/woman_showcase_item.png')} alt="woman showcase item" class="img img-fluid" />
                    <p><a href="codeville">CodeVille</a></p>
                    <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                    <p>David Mong, Apr 9, 2020</p>
                </div>
                <div class="col">
                    <img src={require('../../assets/men_playing.png')} alt="men playing like boys" class="img img-fluid" />
                    <p><a href="codeville">CodeVille</a></p>
                    <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                    <p>David Mong, Apr 9, 2020</p>
                </div>
                <div class="col">
                    <img src={require('../../assets/laptop_showcase_madrid.png')} alt="laptop showcase madrid" class="img img-fluid" />
                    <p><a href="codeville">CodeVille</a></p>
                    <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                    <p>David Mong, Apr 9, 2020</p>
                </div>
                <div class="col">
                    <img src={require('../../assets/man_working_laptop.png')} alt="man working laptop" class="img img-fluid" />
                    <p><a href="codeville">CodeVille</a></p>
                    <h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
                    <p>David Mong, Apr 9, 2020</p>
                </div>
            </div>
            </section>

            <Banner />
        </React.Fragment>
    )
}

export default FaqBody;