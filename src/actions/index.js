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






  //login
  login(args){
    return (dispatch) => {
      var firebaseRef
      firebaseRef.authWithOAuthPopup('google', (err,user) => {
        if(err){

        }
        //else
        dispatch(user);
      })
    }
  }


}






export
