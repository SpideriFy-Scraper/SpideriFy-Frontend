import React from "react";
import styled from "styled-components";
import { Label } from 'reactstrap';
import { Link } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div`
    margin : 0 auto ;
    text-align : midlle ;
    background-color : rgba(137, 150, 149 , 0.8);
    width : 360px ;
    align-items : center;
    border-radius : 12px ;
`;
const StyledForm = styled.form`
    padding : 12px ;
`;
const StyledButton = styled.button`
    border-radius : 6px ;
    margin-top : 8px ;
    margin-bottom : 8px ;
    width : 100%;
    padding : 8px;
    color : white ;
    background-color : rgb(67, 149, 217) ;
    transition-duration : 0.7s;
    &:hover {
        background-color : rgb(40, 95, 250) ;
    }

`;
const AlignMiddle = styled.div`
    margin : 0 auto ;
`;
const StyledInputField = styled.input`
    margin : 10px auto ;
    padding : 8px ;
    text-align : middle ;
    width : 100% ;
`;
const StyledSecondaryButton = styled.button`
    width : 45% ;
    background-color : rgba(255, 74, 95, 0.7);
    color : white ;
    text-align : center ;
    margin-top : 8px ;
    margin-bottom : 8px ;
    margin-left : 8px ;
    margin-right : 8px ;
    border-radius : 12px ;
    transition-duration : 0.7s;

    &:hover {
        background-color : rgba(190, 40, 90, 1) ;
    }
    >a{
        text-decoration : none ;
        color : white ;
    }

`;
const SecondaryButtonsWrapper = styled.div`
    position : relative ;
    display : flex ;
    justify-content : center ;
    flex-flow : row wrap ;
    align-items : stretch ;
`;

const LoginForm = () => {
    const [UserNameInput, setUserNameInput] = useState(null);
    const [PassWordInput, setPassWordInput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const onUserNameChange = ({ target }) => {
        setUserNameInput(target?.value);
        console.log(target?.value);
    };
    const onPassWordChange = ({ target }) => {
        setPassWordInput(target?.value);
        console.log(target?.value);
    };

    const onRememberMeChange = ({ target }) => {
        setRememberMe(target?.checked);
        console.log(target?.checked);
    }
    return (
        <Wrapper>
            <StyledForm>
                <fieldset>
                    <StyledInputField type="name" placeholder="Username" onChange={onUserNameChange} />
                    <br />
                    <StyledInputField type="password" placeholder="Password" onChange={onPassWordChange} />
                </fieldset>

                <AlignMiddle>
                    <StyledButton type="submit" >
                        Login
                    </StyledButton>
                </AlignMiddle>
                <input type="checkbox" onChange={onRememberMeChange} />
                <Label style={{ padding: "4px" }} >
                    Remember me
                </Label>
                <br />
                <SecondaryButtonsWrapper>
                    <StyledSecondaryButton>
                        Forgot my Password
                    </StyledSecondaryButton>
                    <StyledSecondaryButton >
                        <Link to="/SignUp">Sign up</Link>
                    </StyledSecondaryButton>
                </SecondaryButtonsWrapper>
            </StyledForm>
        </Wrapper>)
};


export default LoginForm;