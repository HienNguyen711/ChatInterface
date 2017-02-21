import React from 'react';
import mui from 'material-ui';
import Message from './Message.jsx';

var {Card,List} = mui;

class MessageList extends React.Component {
 constructor(props){
    super(props);
    this.state = {
      messages: [
        'Hello',
        'Hi'
      ]
    };
  }



}


render(){
  var messageNodes = this.state.messages.map( (message) => {
    return (
      <Message message={message}/>

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
//export
export default MessageList;
