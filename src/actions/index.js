import alt from '../alt';
import Firebase from 'firebase';

//class Actions
class Actions {
  //constructor
  constructor(){
    this.generateActions(
      //receive channels from firebase
      'channelsReceived',
      //fail channel
      'channelsFailed',
      //message is received
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      //loading message will show loading
      'messagesLoading',
      //send message
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    );
  }



  //log in
  login(args){
    return (dispatch) => {
      var firebaseRef = new Firebase('https://chatinterface-6c669.firebaseio.com/');
      //with google popup
      firebaseRef.authWithOAuthPopup("google", (error, user)=> {
        if(error){
          return;
        }
        //dispatch
        dispatch(user);
      });
    }
  }
}
//export
//module.export = alt.createActions(LocationActions);
export default alt.createActions(Actions);

