import React from 'react';
import { AiOutlineLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
// import { Link } from 'react-router-dom';


function Footer(props){
    return(
        <React.Fragment>
            <footer id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Contact</h2>
                            <p>If you like my work and would like to connect, send me a direct message or connect with me via linkedin.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul class="list-unstyled media-links">
                                <li>
                                    <a href="mailto:mghotra1993@gmail.com" title="link to send email">
                                        <AiOutlineMail aria-hidden="true" className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/manpreet-kaur-260905140/" title="link to go Manpreet's linkedin" target="_blank" rel="noopener noreferrer">
                                        <AiOutlineLinkedin  aria-hidden="true" className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/mka0019" title="link to go to Manpreet's github" target="_blank" rel="noopener noreferrer">
                                        <AiFillGithub aria-hidden="true" className="icon"/>
                                    </a>
                                </li>
                            </ul>
                            <p>Copyright 2020. Manpreet Kaur.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}



export default Footer;