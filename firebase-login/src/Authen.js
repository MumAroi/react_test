import React, { Component } from 'react';

var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyCH0Rim85B0QXDMl-ETzlWLygzip8Q3QO4",
    authDomain: "usurvey-3bd98.firebaseapp.com",
    databaseURL: "https://usurvey-3bd98.firebaseio.com",
    projectId: "usurvey-3bd98",
    storageBucket: "usurvey-3bd98.appspot.com",
    messagingSenderId: "141136389388"
};
firebase.initializeApp(config);

class Authen extends Component {
    constructor(props){
        super(props)

        this.state = {
            err: ''
        }

        this.login  = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.logout = this.logout.bind(this);
        this.google = this.google.bind(this);
    }

    login(event){
        const email    = this.refs.email.value;
        const password = this.refs.password.value;
        // console.log(email, password);

        const auth = firebase.auth();

        // handle login promise 
        const promise = auth.signInWithEmailAndPassword(email, password);

        promise.then(user => {
            console.log(user);
            // firebase.database.ref('/').on('value').then(data => {
            //     console.log(data);
            // })
            var lout = document.getElementById('logout');
            lout.classList.remove('hide');
        });

        promise.catch(e => {
            var err = e.message;
            console.log(err);
            this.setState({
                err: err
            });
        });
    }

    signup(){
        const email    = this.refs.email.value;
        const password = this.refs.password.value;
        // console.log(email, password);

        const auth = firebase.auth();
        // สร้าง username login  firebase
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.then(
            user => {
                var err = "welcome " + user.email;
                firebase.database().ref('/users'+user.uid).set({
                    email: user.email
                });
                // console.log(user);
                this.setState({
                    err:err
                })
            // console.log(user);
            }
        );
        promise.catch(e => {
            var err = e.message;
            // console.log(err);
            this.setState({err:err});
        });
        // console.log(promise);
    }

    logout(){
        firebase.auth().signOut();
        var lout = document.getElementById('logout');
        lout.classList.add('hide');
    }

    google(){
        var provider = new firebase.auth.GoogleAuthProvider();
        var promise = firebase.auth().signInWithPopup(provider);

        promise.then(result=>{
            var user = result.user;
            firebase.database().ref('users/'+user.uid).set({
                email: user.email,
                name: user.displayName
            });
        });
    }

    render(){
        return(
            <div>
                <input id="email" ref="email" type="email" placeholder="Enter your email" /> <br />
                <input id="pass" ref="password" type="password" placeholder="Enter your password" /> <br />
                <p>{this.state.err}</p>
                <button onClick={this.login} >Log In</button>
                <button onClick={this.signup}>Sign Up</button>
                <button onClick={this.logout} id="logout" className="hide" >Log out</button><br />
                <button onClick={this.google} id="google" className="google" >Sign in google</button>
            </div>
        );
    }   
}

export default Authen;