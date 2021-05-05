import './App.css';
import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button } from 'reactstrap'
import {BrowserRouter , Switch , Route , Link} from 'react-router-dom'
import About from './components/About'
import FAQ from './components/FAQ'
import Home from './components/Home'
import {CommentFunctional as Comment} from './components/Comment'
function App() {

const testCommentObject = {
  title: "Excellant Laptop!",
  content: "Very Easy set-up. very good design! I love it!",
  date: "Reviewed in the United States on September 30, 2019",
  variant: "What's this?",
  verified: true,
  author: "Helen",
  rating: 5.0,
  sentiment: "0.9994373321533203"};
const testCommentObject1 = {
  "title": "Great specs",
  "content": "It was a great oprion to gift. Looking at the specs and based on the intended use, it was the best option I had ASAP. Delivery was rather fast too.",
  "date": "Reviewed in the United States on February 25, 2020",
  "variant": null,
  "verified": true,
  "author": "eve",
  "rating": 4.0,
  "sentiment": "0.9993892908096313"
}

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
      <Comment commentSpec = {testCommentObject} ></Comment>
      <Comment commentSpec = {testCommentObject1}></Comment>

        </Route>
      </Switch>
        </div>
        </div>



    </div>
      </BrowserRouter>
  );
}

export default App;
