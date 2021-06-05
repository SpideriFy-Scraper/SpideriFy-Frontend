import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import FAQ from "./components/FAQ";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import styled from "styled-components";
import Profile from "./components/Profile";

const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-image: url(${process.env.PUBLIC_URL +
  "/spiderify_sans_search.png"});
  background-size: cover;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
`;

const PageLinkButton = styled(Button)`
  margin-right: 1rem;
  > a {
    text-decoration: none;
    color: white;
  }
`;

const PageSignIn_UpButton = styled(Button)`
  margin-left: 47rem;
  margin-right: 1rem;
  > a {
    text-decoration: none;
    color: white;
  }
`;

function App() {

  const valid = localStorage.getItem("valid");

  const [LoginButtonString, setLoginButtonString] = useState(valid ? "Logout" : "Login");
  const [SignUpButtonString, setSignUpButtonString] = useState(valid ? "Profile" : "Sign Up");
  const [LoginButtonRoute, setLoginButtonRoute] = useState(valid ? "/LogOut" : "/user/LogIn");
  const [SignUpButtonRoute, setSignUpButtonRoute] = useState(valid ? "/user/profile" : "/SignUp");

  console.log(SignUpButtonString);

  // UserLoggedInOrNot();

  const onLogOutClick = () => {
    localStorage.setItem("valid", false);
    setLoginButtonRoute("/user/LogIn");
    setLoginButtonString("LogIn");
    setSignUpButtonRoute("/SignUp");
    setSignUpButtonString("SignUp");
  }
  return (
    <BrowserRouter >
      <AppContainer>
        <LinksContainer>
          <PageLinkButton color="danger" >
            <Link to="/" > Home </Link>
          </PageLinkButton>
          <PageLinkButton color="danger" >
            <Link to="/contactus" > Contact us </Link>
          </PageLinkButton>
          <PageLinkButton color="danger" >
            <Link to="/FAQ" > FAQ </Link>
          </PageLinkButton>
          <PageLinkButton color="danger" >
            <Link to="/about" >
              about
        </Link>
          </PageLinkButton>
          <PageSignIn_UpButton color="danger" id="SignUp" >
            <Link to={SignUpButtonRoute} onClick={onLogOutClick} > {SignUpButtonString} </Link>
          </PageSignIn_UpButton>
          <PageLinkButton color="danger" id="LogIn">
            <Link to={LoginButtonRoute} > {LoginButtonString}
            </Link>
          </PageLinkButton>
        </LinksContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/about" component={About} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/user/LogIn" component={LogIn} />
          <Route path="/user/profile" component={Profile} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;