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
            studentName: 'por',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        };
        this.nameSubmit     = this.nameSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);
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

    answerSelected(){

    }

    questionSubmit(){
        
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
            questions   = <div>
                <h2>Here are some questions: </h2>
                <form onSubmit={this.questionSubmit} >
                    <div className="card" >
                        <label>What kind of courses you like the most: </label><br/>
                        <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} /> Technology
                        <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} /> Design
                        <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} /> Marketing
                    </div>
                    <div className="card" >
                        <label>you are a: </label><br/>
                        <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} /> Student
                        <input type="radio" name="answer2" value="in-job" onChange={this.answerSelected} /> in-job
                        <input type="radio" name="answer2" value="looking-job" onChange={this.answerSelected} /> looking-job
                    </div>
                    <div className="card" >
                        <label>Is online learning helpful: </label><br/>
                        <input type="radio" name="answer3" value="yes" onChange={this.answerSelected} /> yes
                        <input type="radio" name="answer3" value="no" onChange={this.answerSelected} /> no
                        <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} /> maybe
                    </div>
                    <input className="feedback-button" type="submit" value="submit" />
                </form>
            </div>;
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