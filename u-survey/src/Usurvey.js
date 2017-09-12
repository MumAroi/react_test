import React, { Component } from 'react';

var firebase = require('firebase');
var uuid     = require('uuid');

 // Initialize Firebase
var config = {
    apiKey: "AIzaSyCH0Rim85B0QXDMl-ETzlWLygzip8Q3QO4",
    authDomain: "usurvey-3bd98.firebaseapp.com",
    databaseURL: "https://usurvey-3bd98.firebaseio.com",
    projectId: "usurvey-3bd98",
    storageBucket: "usurvey-3bd98.appspot.com",
    messagingSenderId: "141136389388"
  };
firebase.initializeApp(config);

class Usurvey extends Component {
    constructor(props){
        super(props);

        this.state = {
            uuid: uuid.v1(),
            studentName: '',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        };
        this.nameSubmit = this.nameSubmit.bind(this);
    }

    nameSubmit(event){
        var studentName = this.refs.name.value;
        this.setState({
            studentName: studentName
        },function(){
            console.log(this.state);
            console.log(event);
        });
    }

    render(){
        var studentName;
        var questions;

        if(this.state.studentName === '' && this.state.isSubmitted === false){
            studentName = <div>
                <h1>Hey Student, please let us know your name : </h1>
                <form onSubmit={this.nameSubmit} >
                    <input className="namy" type="text" placeholder="Enter your name" ref="name" />
                </form>
            </div>;
            questions = '';
        }else if(this.state.studentName !== '' && this.state.isSubmitted === false){
            studentName = <h1>Wellcome to U-survey, {this.state.studentName}</h1> ;
            questions = <p>Hey</p>;
        }
        return(
            <div>
               {studentName}
               ---------------------------
               {questions}
            </div>
        );
    }
}

export default Usurvey;