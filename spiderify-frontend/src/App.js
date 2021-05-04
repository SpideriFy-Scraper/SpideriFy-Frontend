import './App.css';
import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button } from 'reactstrap'
import {BrowserRouter , Switch , Route , Link} from 'react-router-dom'
import About from './components/About'
import FAQ from './components/FAQ'
import Home from './components/Home'
function App() {

function buttonClicked (){
  console.log("button clicked");
}

  return (
      <BrowserRouter>
    <div>
        <div style = {{backgroundImage : `url('spiderify_sans_search.png')` , backgroundRepeat : 'no-repeat'   }}  className="App-logo">

          <div style = {{float : 'left' , padding : '10px 0px 0px 10px'}}>
            <Button color = "danger" style ={{align : "left"  }} onClick = {buttonClicked}><Link to = '/contactus' style = {{ color : 'white' ,  textDecoration : 'none'}}> Contact us </Link></Button>{' '}
            <Button color = "danger" ><Link to = '/FAQ' style = {{ textDecoration : 'none' , color : 'white'}}> FAQ </Link></Button>{' '}
            <Button color = "danger" ><Link to = '/about' style = {{ textDecoration : 'none' , color : 'white'}}> about </Link></Button>
          </div>

    <div style = {{clear : 'both'}}>
      <Switch>

        <Route exact path="/FAQ">
          <FAQ/>
        </Route>

        <Route path="/about">
        <About/>
        </Route>
        <Route path = "/contactus">

          <Home/>
        </Route>
      </Switch>
        </div>
        </div>



    </div>
      </BrowserRouter>
  );
}

export default App;
