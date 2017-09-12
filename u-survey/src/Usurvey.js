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
    }

    render(){
        var studentName;
        var questions;

        if(this.state.studentName === '' && this.state.isSubmitted === false){
            studentName = <div>
                <h1>Hey Student, please let us know your name : </h1>
                <form>
                    <input type="text" placeholder="Enter your name" />
                </form>
            </div>
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