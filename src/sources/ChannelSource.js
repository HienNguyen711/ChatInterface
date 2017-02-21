import Actions from '../actions';
import Firebase from 'firebase';


//set up firebase ref
let firebaseRef = new Firebase('https://chatinterface-6c669.firebaseio.com/channels');


let ChannelSource = {
  //getChannels
  getChannels: {
    remote(state){
      return new Promise((resolve, reject) => {
        firebaseRef.once("value",(dataSnapshot) => {
          var channels = dataSnapshot.val();
          resolve(channels);
        });
      });
    },

  success:Actions.channelsReceived,
  error:Actions.channelsFailed


  }


}



//export
export default ChannelSource;
