//login
import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';



var {Card, CardText, RaisedButton} = mui;

//class Login
class Login extends React.Component {
  //onClick
  onClick(){
    Actions.login();
  }

  //render
  render(){
    return (
      <Card style={{
              'maxWidth': '800px',
              'margin': '30px auto',
              'padding': '50px'
            }}>
              <CardText style={{
                'textAlign': 'center'
              }}>
                Log In with your Google Account
              </CardText>

              <RaisedButton style={{
                display: 'block',
              }} onClick={this.onClick.bind(this)}
              label="Log in with Google" primary={true} />
        </Card>

        );
    }
}


module.exports = Login;
