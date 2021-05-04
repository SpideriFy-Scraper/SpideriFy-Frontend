import './App.css';
import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button , Badge } from 'reactstrap'



function App() {

function buttonClicked (){
  console.log("button clicked");
}

  return (
    <div style = {{backgroundImage : `url('spiderify_sans_search.png')` , backgroundRepeat : 'no-repeat'   }}  className="App-logo">

      <div style = {{float : 'left' , padding : '10px 0px 0px 10px'}}>
        <Button color = "danger" style ={{align : "left"}} onClick = {buttonClicked}> Contact us </Button>{' '}
        <Button color = "danger" > FAQ </Button>{' '}
        <Button color = "danger" > about </Button>
      </div>

      <div style ={{clear : 'both'}}>
        <h1> <Badge color = "secondary"> Comments in your hands </Badge> </h1>

        <div style = {{margin : '27% 30% 0% 30%'}}>
        <Button outline block color = "secondary" style={{color :'silver'}} onClick = {buttonClicked}><h2 style = {{padding : '1%'}}> Getting started </h2></Button>{' '}
        </div>
      </div>
    </div>
  );
}

export default App;
