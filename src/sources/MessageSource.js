import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;
let MessageSource = {
  //getMessages
  getMessages: {
    remote(state){
      if(firebaseRef){
        firebaseRef.off();
      }

      firebaseRef = new Firebase('https://chatinterface-6c669.firebaseio.com/messages');
    }
  }












}
