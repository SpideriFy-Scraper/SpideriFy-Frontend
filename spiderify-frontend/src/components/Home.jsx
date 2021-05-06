import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import Loading from "./Loading";
import { comments } from "../comments-mock";
import CommentSection from "./CommentSection";
import axios from "axios";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    > .form-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`;

const WhiteHeader = styled.h3`
  color: white;
  font-size: 2rem;
`;

const Home = () => {
  const [urlInput, setUrlInput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedComments, setLoadedComments] = useState([]);

  const getComments = () => {
    // TODO: fetch comments from server and set it in the state
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log("response : ", response);
        setIsLoading(false);
        setLoadedComments(comments);
      });
  };

  const onSearchClick = (event) => {
    event.preventDefault();
    console.log("url input : ", urlInput);
    setIsLoading(true);
    getComments();
  };

  const onUrlChange = ({ target }) => {
    setUrlInput(target?.value);
  };

  return (
    <>
      {isLoading && <Loading />}
      <FormContainer>
        <Form>
          <FormGroup>
            <Label for="url-address">
              <WhiteHeader>Please Enter You URL here</WhiteHeader>
            </Label>
            <Input
              id="url-address"
              type="url"
              placeholder="Url Address"
              onChange={onUrlChange}
            />
          </FormGroup>
          <Button block color="secondary" onClick={onSearchClick}>
            <h2> Search </h2>
          </Button>
        </Form>
      </FormContainer>
      <div style={{ overflow: "auto", margin: "1rem 0" }}>
        {loadedComments?.length && <CommentSection comments={loadedComments} />}
      </div>
    </>
  );
};

export default Home;
