import alt
import Firebase

//class Actions
class Actions {
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
