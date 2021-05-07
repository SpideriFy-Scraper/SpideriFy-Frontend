import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import {commentsMock} from '../comments-mock'
import Loading from "./Loading";
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
  const [averageEstimation , setAverageEstimation] = useState(0);
  const [pieChartInfo , setPieChartInfo] = useState(null);

  const getComments = () => {
    // TODO: fetch comments from server and set it in the state
    axios
      .post('http://localhost:8080/api/v1/product' , {
        url : urlInput 
      })
      .then((response) => {
        console.log("these are comments");
        setIsLoading(false);
        const comments = response.data;

        setLoadedComments(comments.REVIEWS);

        var avg = 0.0 ;
        var sum = 0.0 ;
        var avgOfEstimation = 0 ;
        var badCommentsCount = 0 ;
        console.log("i reached here!");
        for(let i = 0 ; i < comments.REVIEWS.length ; i++)
        {
          sum += comments.REVIEWS[i].rating;
        }
        for(let i = 0 ; i < comments.REVIEWS.length ; i++)
        {
          avgOfEstimation += parseFloat(comments.REVIEWS[i].sentiment);
          if(comments.REVIEWS[i].sentiment < 0.5)
          {
            console.log(comments.REVIEWS[i].sentiment);
            badCommentsCount ++ ;
          }
        }
        const goodCommentsCount = (comments.REVIEWS.length - badCommentsCount);
        console.log("good components are : " + goodCommentsCount);
        const chartInfo = {goodComments : goodCommentsCount , 
          badComments : badCommentsCount}; 
        setPieChartInfo(chartInfo);
        console.log("avg of estimation" + avgOfEstimation);
        avgOfEstimation = 5 * avgOfEstimation / comments.REVIEWS.length ;
        console.log(avgOfEstimation);
        setAverageEstimation(avgOfEstimation);
        avg = sum / comments.REVIEWS.length ;
        setAverageRating(avg);
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
                <WhiteHeader>Please Enter Your URL Here</WhiteHeader>
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
        {loadedComments?.length && pieChartInfo && <CommentSection comments={loadedComments} pieChartInformation = {pieChartInfo}
         averages = {{actualRating : averageRating , estimation : averageEstimation}} />}
      </div>
    </>
  );
};

export default Home;
