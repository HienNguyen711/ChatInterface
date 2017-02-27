import React from 'react';
import mui from 'material-ui';
//alt
import Actions from '../actions';


var {ListItem} = mui;

class Channel extends React.Component {
  constructor(props){
    super(props);
  }
  onClick(){
    Actions.channelOpened(this.props.channel);
  }


  render(){

    if(this.props.channel.selected){
      this.style.backgroundColor= '#f0f0f0';
    }


    return (
       <ListItem
        onClick={this.onClick.bind(this)}
        style={style}
        key={this.props.channel.key}
      >{this.props.channel.name}</ListItem>
    );
  }
}

export default Channel;
