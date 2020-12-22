import React from 'react';
import { Jumbotron, Button, Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import AvatarImage from '../imgs/Avatar-Maker.svg'

function RenderHeader(){
    return(
        <Jumbotron id="home" fluid>
            <div className="container">
                    <div class="row">
                        <div classname="col-sm-6 mx-auto head-content">
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
            <section id="About">
                <div className="containter">
                    <div className="row">
                        <div className="col-sm-6 about-content text-center mx-auto">
                            <h2>ABOUT</h2>
                            <img src={AvatarImage} />
                            <p>Hi, my name is Manpreet Kaur. I'm QA tester and Front-end Developer. I love creating beautiful and interactive sites; whether it be through building one from scratch or insuring one through rigorous QA. I enjoy being part of the coding process and the testing process.</p> 
                        </div>
                    </div>
                </div>
            </section>      
        </React.Fragment>
    );
}

function RenderProjectCards({pc}){
    return(
        <section id="Work">
            <Card className="h-100">
                <div className="img-cont">
                    <CardImg src={pc.image} alt={pc.name} className="img-fluid" />
                    {/* {require( `${pc.image }` )} */}
                </div>
                <CardBody>
                    <CardTitle>{pc.title}</CardTitle>
                    <CardText>{pc.description}</CardText>
                </CardBody>
            </Card>
        </section>
    );
}


function Home(props){
    const projectCards = props.projectCardsMain.map(pc => {
         return(
             <RenderProjectCards pc={pc}/>
         );
    });

    return(
        <React.Fragment>
            <RenderHeader/>
            <RenderAbout/>
            {projectCards}
        </React.Fragment>
    );
}

export default Home;