import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Timeline from './TimelineComponent'
import { PROJECTS } from '../shared/projectCards';
import { RESUME_WORK, RESUME_EDUCATION } from '../shared/resume';
//import { withRouter } from 'react-router-dom';



class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            projects:PROJECTS,
            work: RESUME_WORK,
            education: RESUME_EDUCATION
        };
    }   
    render(){
        return(
            <div>
                <Header />
                <Home projectCardsMain={this.state.projects}/>
                <Timeline workTimelineMain={this.state.work} educationTimelineMain={this.state.education} />
                <Footer/>
            </div>
        );
    }

}




export default Main;