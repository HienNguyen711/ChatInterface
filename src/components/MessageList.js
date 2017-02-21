import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

var {Card, List} = mui;

//init firebase


class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages:{}
    };
    
    this.firebaseRef = new Firebase('https://chatinterface-6c669.firebaseio.com/messages');
    this.firebaseRef.on('child_added', (message) => {
      if(this.state.messages[message.key()]){
        return;
      }
      
      
      let msgVal = message.val();
      msgVal.key = message.key();
      this.state.messages[msgVal.key] = msgVal;
      this.setState({
        messages: this.state.messages
      });
      
    });
  }

  render(){
    var messageNodes = _.values(this.state.messages).map((message)=> {
      return (
        <Message message={message.message} />
      );
    });

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: 30
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;
