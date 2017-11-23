import React, { Component } from 'react';
// step 4 : load prop-types
import PropTypes from 'prop-types';

class User extends Component {  
  render() {
    return (
     <div>
        <div>{this.props.name}</div>
        <div>{this.props.lastname}</div>
        <div>{this.props.age}</div>
     </div>
    );
  }
}
// step 5 : setting propTupes 
User.propTypes = {
  //name:PropTypes.string,      // STRING
  lastname:PropTypes.string,  // STRING
  age:PropTypes.number,       // NUMBER
  //hobbies:PropTypes.array,    // ARRAY
  spanish:PropTypes.bool,   // NUMBER
  message:PropTypes.func,     // FUNCTION
  car:PropTypes.object,       // OBJECT

  // step 6 : accept different values
  //name: PropTypes.oneOf(['Francis', 'James']), // ACCEPT DIFFERENT VALUES
  // step 7 : accept ontOfTupe string, number, ['Francis', 'James']
  name:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(['Francis', 'James'])
  ]),
  // step 8 : accept arrayOF values string
  hobbies: PropTypes.arrayOf(PropTypes.string),
  // step 9 : accept string isRequired
  //mother: PropTypes.string.isRequired,
  // step 10 : propTypes accept By function 
  mother: function(props, propName, componentName) {
    if(props[propName] !== 'Martha'){
       return new Error(`The name ${props[propName]} is incorrect, should be Martha`)
    }
  }
}

export default User;
