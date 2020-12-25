import React from 'react';
import { Jumbotron, Card, CardImg, CardBody, CardLink} from 'reactstrap';
// import { Link } from 'react-router-dom';
import AvatarImage from '../imgs/Avatar-Maker.svg'

function RenderHeader(){
    return(
        <Jumbotron id="home" fluid>
            <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mx-auto head-content">
                            <h1>Manpreet Kaur</h1>
                            <h3>Web Developer</h3>
                        </div>
                    </div>
            </div>
        </Jumbotron>
    );
}

function RenderAbout(){
    return(
        <React.Fragment>
            <section id="about">
                <div className="containter">
                    <div className="row">
                        <div className="col-sm-6 about-content text-center mx-auto">
                            <h2>ABOUT</h2>
                            <img src={AvatarImage} className="avatar-image" alt="avatar image of MK" />
                            <p>Hi, my name is Manpreet Kaur. I'm QA tester and transitioning into Front-End Development. I have 4 years of QA testing experience in mobile &#38; broswer applications. In addition, I also have skills in other fields such as data-entry, Wordpress site maintenance, tba.... </p> 
                        </div>
                    </div>
                </div>
            </section>      
        </React.Fragment>
    );
}

function RenderProjectCards({pc}){
    return(
            <Card>
                <div className="img-cont">
                    <CardImg src={pc.image} alt={pc.name} className="img-fluid" />
                </div>
                <CardBody className="card-img-overlay">
                    <CardLink href={pc.link} target="_blank">{pc.title} &gt;</CardLink>
                </CardBody>
            </Card>
    );
}


function Home(props){
    const projectCards = props.projectCardsMain.map(pc => {
         return(
             <div key={pc.id} className="col-sm-6 col-md-4">
                <RenderProjectCards pc={pc}/>
             </div>
         );
    });

    return(
        <React.Fragment>
            <RenderHeader/>
            <RenderAbout/>
            <section id="projects">
                <div className="row mb-5">
                    <div className="col-sm-8 text-center mx-auto fadeUp">
                        <h2 className="mb-4">QA Tester</h2>
                        <p> As a QA Tester, I have planned and studied client specs, design specs and wireframes, in order to detect and diagnose errors and bugs while in QA process. Applyed a user prospective to ensure the website is UX/UI friendly. Administer website functionality tests: Cross-browser and cross-device. Worked with project managers to ensure bugs are tracked and resolved. Below are a few projects that I have been a part of:</p>
                    </div>
                </div>
                <div className="container">
                    {/* <h2>Projects</h2> */}
                    <div className="row">
                        {projectCards}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Home;