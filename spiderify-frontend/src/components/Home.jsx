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

const FormWrapper = styled.div`
  width : 60% ;
  
`

const SearchButton = styled.button`
  background-color : white ;
  background-image : url(${process.env.PUBLIC_URL + 'search-icon.png'});
  background-size : cover ;
  display : flex;
  width : 40px ;
  margin-left : 4px ;
  border-radius : 8px ;
`;

const WhiteHeader = styled.h3`
  color: white;
  font-size: 2rem;
`;
const SearchBarHolder = styled.div`
  display : flex ;
  flex-direction : row;
`;

const Home = () => {
  const [urlInput, setUrlInput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedComments, setLoadedComments] = useState([]);
  const [averageRating , setAverageRating] = useState(0);

  const getComments = () => {
    // TODO: fetch comments from server and set it in the state
    axios
      .post('localhost:8000/api/v1/product' , {
        url : urlInput
      })
      .then((response) => {
        console.log("response : ", response.data);
        console.log("these are comments");
        console.log(response.data);
        setIsLoading(false);

        setLoadedComments(response.data.REVIEWS);
        var avg = 0.0 ;
        var sum = 0.0 ;
        for(var i =0 ; i < response.data.REVIEWS.length ; i++)
        {
          sum += response.data.REVIEWS[i].rating;
          console.log("sum rating is : " + sum);
        }
        console.log(response.data.REVIEWS.length);
        avg = sum / response.data.REVIEWS.length ;
        setAverageRating(avg);
        console.log(sum + "/" + response.data.REVIEWS.length + "=" + avg );
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
        <FormWrapper >
          <Form>
            <FormGroup>
              <Label for="url-address" style = {{margin : 'auto'}}>
                <WhiteHeader>Please Enter You URL here</WhiteHeader>
              </Label>
              <div style = {{display : 'flex' , flexDirection : 'row'}}>
                <Input
                  id="url-address"
                  type="url"
                  placeholder="Url Address"
                  style={{ display: 'flex' }}
                  onChange={onUrlChange}
                />

                <SearchButton onClick={onSearchClick}>
                </SearchButton>
              </div>
            </FormGroup>

          </Form>
        </FormWrapper>
      </FormContainer>

      <div style={{ overflow: "auto", margin: "1rem 0" }}>
        {loadedComments?.length && <CommentSection comments={loadedComments} average = {averageRating} />}
      </div>
    </>
  );
};

export default Home;
