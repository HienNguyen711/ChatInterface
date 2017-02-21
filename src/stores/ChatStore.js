import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import ChannelSource from '../sources/ChannelSource';
import MessageSource from '../sources/MessageSource';
import _ from 'lodash';


@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore = {
  //constructor
  constructor(){


    this.state = {
      user: null,
      messages:null,
      messagesLoading:true
    };
  }


//bind actions handlers to actions
//this.bindListeners({...})
  //bind MESSAGESLOADING
  @bind(Actions.messagesLoading)
  messagesLoading(){
  this.setState({
    messagesLoading: true

});
}
  //bind MESSAGESRECEIVED
  @bind(Actions.messagesReceived)
  receivedMessages(messages){
    _(messages)
      .key()
      .each((k) => {
      messages[k].key = k;
    })
      .value();
    //setState
    this.setState({
      messages,//es6
      messagesLoading:false
    });



  }

  @bind(Actions.sendMessage)
  sendMessage(message){
    this.state.message = message;
    setTimeout(this.getInstance().sendMessage,10);
  }

  @bind(Actions.messageReceived)
  messageReceived(msg){
    if(this.state.messages[msg.key]){
      return;
    }
    this.state.messages[msg.key] = msg;
    this.setState({
      messages: this.state.messages
    });


  }


  @bind(Actions.channelOpened)
  channelOpened(selectedChannel){
    _(this.state.channels)
      .values()
      .each((channel) => {
        channel.selected = false;
    })
      .value();
    selectedChannel.selected = true;

    this.setState({
      selectedChannel,
      channels:this.state.channels,
      messagesDirty:true
    });
    setTimeout(this.getInstance().getMessages,100);

  }

  @bind(Actions.channelsReceived)
  receivedChannels(channels){
    let selectedChannel;
    _(channels)
      .keys()
      .each((key, index) => {
      channels[key].key = key;
      if(index == 0){
        channels[key].selected = true;
        selectedChannel = channels[key];
      }
    })
      .value();

    this.setState({
      channels,
      selectedChannel,
      messagesDirty:true
    });

    setTimeout(this.getInstance().getMessages,100);

  }

  @bind(Actions.login)
  login(user) {
    this.setState({
      user: user
    });
  }



}



//export using createStore(ChatStore)
//module.exports = alt.createStore(LocationStore, 'LocaltionStore');
export default alt.createStore(ChatStore);
