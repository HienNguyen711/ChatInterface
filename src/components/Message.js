import React from 'react';
import mui from 'material-ui';

class Message extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return (

      <ListItem
      leftAvatar={Avatar src="http://mattkushin.com/wp-content/uploads/2015/11/Avatar-Matt-3.png" />}

      >
      {this.props.message}

      </ListItem>


    )
  }
}


//export
export default Message;
