import React, { Component } from 'react';

// step 32 : create class Subscriptions
class Subscriptions extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            error: false,
            success: false
        }
    }

    // step 33 : create func onChangeInput
    onChangeInput = ( even ) => {
        this.setState({
            email: even.target.value
        });
    }

    // step 34 : create func handleSubmit
    handleSubmit = ( even ) => {
        even.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;
        if(regex.test(email)){
            this.saveSubscription(email);
        }else{
            this.setState({error: true});
        }
        this.clearMeaaages();
    }

    // step 35 : create func saveSubsctiption
    saveSubscription = ( email ) => {
        const URL_EMAIL = 'https://json-server-nba.herokuapp.com/subcriptions';
        fetch(URL_EMAIL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then(res=>res.json())
        .then((res)=>{
            // console.log(res)
            this.setState({
                email: '',
                success: true
            });
        });
    }

    // step 37 : create func clearMessages 
    clearMeaaages = () => {
        setTimeout(function(){
            this.setState({
                error:   false,
                success: false
            });
        }.bind(this),3000);
    }

    render(){
        return(
            <div className="subscribe-panal" >
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit} >
                        <input 
                        type="text" 
                        placeholder="youremail@email.com"
                        value={this.state.email}
                        onChange={this.onChangeInput}
                        />
                        <div className={this.state.error ? "error show":"error"}>Check you email</div>
                        <div className={this.state.success ? "success show":"success"}>Thank you</div>
                    </form>
                </div>
                <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </small>
            </div>
        );
    }
} 

export default Subscriptions;