import React from "react";
import { Spinner } from "reactstrap";
import styled from "styled-components";

const LoadingContainer = styled.div`
  position: absolute;
  background-color: rgba(4, 25, 42, 0.69);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const MySpinner = styled(Spinner)`
  width: 5rem;
  height: 5rem;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <MySpinner color="danger" />
    </LoadingContainer>
  );
};

export default Loading;
