import './App.css';
import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button } from 'reactstrap'
import {BrowserRouter , Switch , Route , Link} from 'react-router-dom'
import About from './components/About'
import FAQ from './components/FAQ'
import Home from './components/Home'
import Comment from './components/Comment'
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
        <Route path = '/Comment-test'>
          <Comment 
    title = "Nice, but faulty!"
    content = "I got a faulty laptop from day 1! Before I ordered I made sure to ask the seller if it\u2019s NEW.  Well, I got it and it shuts down every 2 minutes. They offered refund, but I live outside the US and returning this mess will cost me a lot. I thought it was tested/upgraded as stated. How can they missed mines when it shuts off right after start up?  Now I\u2019ve trust issues with purchasing electronics online now."
    date = "Reviewed in the United States on November 2, 2019"
    author = "Candice"
    sentiment = "0.00034245848655700684"
  />

        </Route>
      </Switch>
        </div>
        </div>



    </div>
      </BrowserRouter>
  );
}

export default App;
