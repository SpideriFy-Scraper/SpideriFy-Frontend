import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentSectionContainer = styled.div`
  padding: 1rem 0;
`;

const CommentSection = ({ comments }) => {
  return (
    <CommentSectionContainer>
      {comments?.map((comment, index) => {
        return <Comment key={index} commentSpec={comment} />;
      })}
    </CommentSectionContainer>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.array,
};

export default CommentSection;
