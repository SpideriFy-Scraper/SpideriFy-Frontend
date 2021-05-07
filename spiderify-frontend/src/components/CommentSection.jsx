import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import styled from "styled-components";
import DoubleChartContainer  from './DoubleChartContainer'
const CommentSectionContainer = styled.div`
  padding: 1rem 0;
`;

const ResultsWrapper = styled.div`

  margin-left : 14%;
  margin-right : 14%;

`;
const CommentSection = ({ comments }) => {
  return (
  <ResultsWrapper>
    <DoubleChartContainer/>
    <CommentSectionContainer>
    
      {comments?.map((comment, index) => {
        return <Comment key={index} commentSpec={comment} />;
      })}
    </CommentSectionContainer>
  </ResultsWrapper>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.array,
};

export default CommentSection;
