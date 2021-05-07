import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import styled from "styled-components";

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

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <LinksContainer>
          <PageLinkButton color="danger">
            <Link to="/">Home</Link>
          </PageLinkButton>
          <PageLinkButton color="danger">
            <Link to="/contactus">Contact us</Link>
          </PageLinkButton>
          <PageLinkButton color="danger">
            <Link to="/FAQ">FAQ</Link>
          </PageLinkButton>
          <PageLinkButton color="danger">
            <Link to="/about">about</Link>
          </PageLinkButton>
        </LinksContainer>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/about" component={About} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
