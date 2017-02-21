import alt
import Actions

import {decorate,bind, datasource} from alt
@decorate(alt)
class ChatStore = {
  //constructor
  constructor(){
    this.state = {user: null};
  }
  @bind(Actions.login)
  login(user){
  this.setState({user:user});
}








}


//export using createStore(ChatStore)
