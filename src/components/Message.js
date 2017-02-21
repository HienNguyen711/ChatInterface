import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ListItem
        leftAvatar={<Avatar src="https://v.cdn.vine.co/r/avatars/671CEDCE1F1113556201746333696_pic-r-140846669103296d6214bd7.jpg.jpg?versionId=jaRwq5D74p4U_ZMTBASizw3gwpbRLNLl" />}
      >{this.props.message}</ListItem>
    );
  }
}

export default Message;
