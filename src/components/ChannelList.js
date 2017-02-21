import React from 'react';
import mui from 'material-ui';
import Channel from './Channel.jsx';

var {Card, List} = mui;

class ChannelList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channels: [
        'Jane',
        'Jimmy'
      ]
    };
  }

  render(){
    var channelNodes = this.state.channels.map((channel)=> {
      return (
        <Channel channel={channel} />
      );
    });

    return (
      <Card style={{
        flexGrow: 1
      }}>
        <List>
          {channelNodes}
        </List>
      </Card>
    );
  }
}
//export
export default ChannelList;
