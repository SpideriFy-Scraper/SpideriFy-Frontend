import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommnetContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgb(61, 75, 105),
    rgb(14, 32, 69)
  );
  margin-bottom: 8px;
  border-radius: 25px;
  color : white ;
`;

const CommentHeader = styled.h4`
  float: left;
  margin-top: 1%;
  margin-left: 1%;
`;

const CommentDateSection = styled.p`
  float: right;
  margin-top: 1%;
  margin-right: 1%;
`;

const CommentContentContainer = styled.div`
  clear: both;
  background-image: linear-gradient(to bottom right, white, rgb(153, 153, 153));
  margin: 5px;
  border-radius: 5px;
  color: black;
`;

const LeftParagraph = styled.p`
  float: left;
`;

const RightParagraph = styled.p`
  float: right;
`;

const WhiteDiv = styled.div`
  color: white;
`;

const ClearBothDiv = styled.div`
  clear: both;
`;

function Comment({ commentSpec }) {
  return (
    <CommnetContainer>
      <div>
        <CommentHeader>
          {commentSpec.author} : {commentSpec.title}
        </CommentHeader>
        <CommentDateSection>{commentSpec.date}</CommentDateSection>
        <CommentContentContainer>
          <p>{commentSpec.content}</p>
          <WhiteDiv>
            <LeftParagraph>
              analysed result : {commentSpec.sentiment}
            </LeftParagraph>
            <RightParagraph>
              {commentSpec.verified && "costumer is verified"}
            </RightParagraph>
          </WhiteDiv>
        </CommentContentContainer>
        <ClearBothDiv />
      </div>
    </CommnetContainer>
  );
}
Comment.propTypes = {
  commentSpec: PropTypes.object,
};

export default Comment;
