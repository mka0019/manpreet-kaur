import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {PROJECTS} from '../shared/projectCards'



class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            projects:PROJECTS
        };
    }   
    render(){
        return(
            <div>
                <Header />
                <Home project={this.state.projects}/>
                <Footer/>
            </div>
        );
    }

}




export default Main;