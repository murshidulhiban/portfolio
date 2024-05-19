import profile from './assets/newprofile.png';
import pdf from'./assets/resume-example.pdf';
import linkedinicon from './assets/linkedin.png';
import githubicon from './assets/github.png';
import aboutpic from './assets/IMG_20240515_002305.jpg';
import experience from './assets/experience.png';
import education from './assets/education.png';
import project1 from './assets/project-1.png';
import project2 from './assets/project-2.png';
import project3 from './assets/project-3.png';
import email from './assets/email.png';
import arrow from './assets/arrow.png';

function Body(){
    function contact(){
        window.location.href='./#contact';
    }

    function download(){
        window.open(pdf);
    }

    function linkedin(){
        window.location.href='https://www.linkedin.com'
    }

    function github(){
        window.location.href='https://www.github.com'
    }

    function git(){

    }
    return(
        
        <>
            <section id="profile">
                <div className="section__pic-container">
                    <img alt="Avatar" src={profile} />
                </div>
                <div className="section__text">
                    <p className="section__text_p1">Hi, I'm</p>
                    <h1 className="title">Murshidul Hiban</h1>
                    <p className="section__text_p2">Fullstack Developer</p>
                    <div className="btn-container">
                        <button className="btn btn-color-2" onClick={download}>Download CV</button>
                        <button className="btn btn-color-1" onClick={contact}>contact</button>
                    </div>
                    <div id="social-container">
                        <img src={linkedinicon} alt="My linkedin Profile" className="icon" onClick={linkedin}/>
                        <img src={githubicon} alt="My github Profile" className="icon" onClick={github}/>
                    </div>
                </div>
            </section>
            <section id="about">
                <p className="section__text_p1">Get To Know More</p>
                <h1 className="title">About Me</h1>
                <div className="section-container">
                    <div className="section__pic-container">
                        <img src={aboutpic} alt="about picture" className="about-pic"/>
                    </div>
                    <div className="about-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <img src={experience} alt="experience icon" className='icon'/>
                                <h3>Experience</h3>
                                <p>2+ years <br/> Fullstack Development</p>
                            </div>
                            <div className="details-container">
                            <img src={education} alt="education icon" className='icon'/>
                                <h3>Education</h3>
                                <p>3 years <br/>BCA bachlor's degree </p>
                            
                            </div>
                        </div>
                        <div className="text-container">
                            <p>
                            I'm Murshidul Hiban. Graduated from yenepoya university in bachlor's of computer application
                            3 year degree with specialization in AI and Machine learning. I worked in webdevelopment and 
                            mobile app Development while graduating. I started My coding journey in 2018. I always liked 
                            to work with computer's and coding.I also like to explore more software technologies.

                            </p>
                            
                        </div>
                    </div>
                </div>
                <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={()=>window.location.href="./#experience"}></img>
            </section>
            <section id="experience">
                <p className="section__text_p1">Explore My</p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <h2 className="experience-sub-title">Frontend Developer</h2>
                            <div className="article-container">
                                <article>
                                    <img src={experience} alt="Experience icon" className="icon"/>
                                    <div>
                                        <h3>HTML</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={experience} alt="Experience icon" className="icon"/>
                                    <div>
                                        <h3>CSS</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={experience} alt="Experience icon" className="icon"/>
                                    <div>
                                        <h3>SASS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={experience} alt="Experience icon" className="icon"/>
                                    <div>
                                        <h3>JavaScript</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={experience} alt="Experience icon" className="icon"/>
                                    <div>
                                        <h3>TypeScript</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={experience} alt="Experience icon" className="icon"/>
                                    <div>
                                        <h3>Material UI</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="details-container">
                            <h2 className="experience-sub-title">Backend Developer</h2>
                            <div className="article-container">
                                <article>
                                    <img src={experience} alt="Experience icon" className="icon"/>
                                    <div>
                                        <h3>PostgreSQL</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={experience} alt="Experience icon" className="icon"/>
                                    <div>
                                        <h3>Node JS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={experience} alt="Experience icon" className="icon"/>
                                    <div>
                                        <h3>Express JS</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={experience} alt="Experience icon" className="icon"/>
                                    <div>
                                        <h3>Git</h3>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={()=>window.location.href="./#projects"}></img>
            </section>
            <section id="projects">
                <p className="section__text_p1">Browse My Recent</p>
                <h1 className="title">Projects</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={project1} alt="project 1" className="project-img"/>
                        </div>
                        <h2 className="experience-sub-title project-title">Project One</h2>
                        <div className="btn-container ">
                            <button className="btn btn-color-2 project-btn" onClick={git}>Github</button>
                            <button className="btn btn-color-2 project-btn" onClick={git}>Live Demo</button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={project2} alt="project 2" className="project-img"/>
                        </div>
                        <h2 className="experience-sub-title project-title">Project Two</h2>
                        <div className="btn-container ">
                            <button className="btn btn-color-2 project-btn" onClick={git}>Github</button>
                            <button className="btn btn-color-2 project-btn" onClick={git}>Live Demo</button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={project3} alt="project 3" className="project-img"/>
                        </div>
                        <h2 className="experience-sub-title project-title">Project Three</h2>
                        <div className="btn-container ">
                            <button className="btn btn-color-2 project-btn" onClick={git}>Github</button>
                            <button className="btn btn-color-2 project-btn" onClick={git}>Live Demo</button>
                        </div>
                    </div>
                    </div>
                </div>
                <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={()=>window.location.href="./#contact"}></img>
            </section>
            <section id="contact">
                <p className="section__text_p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
                        <img src={email} alt="email icon" className="icon contact-icon email-icon"/>
                        <p><a href="mailto:hibanmurshid123@gmail.com">hibanmurshid123@gmail.com</a></p>
                    </div>
                    <div className="contact-info-container">
                        <img src={linkedinicon} alt="linkedin icon" className="icon contact-icon"/>
                        <p><a href="https://www.linkedin.com/in/murshidul-hiban-p">Linkedin</a></p>
                    </div>
                </div>
            </section>
           
            
        </>
    )
}

export default Body;