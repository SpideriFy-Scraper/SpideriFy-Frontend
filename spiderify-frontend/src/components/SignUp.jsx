import React, { useState } from "react";
import styled from "styled-components";
import { Tooltip } from 'reactstrap'

const Wrapper = styled.div`
    margin : 0 auto ;
    text-align : midlle ;
    background-color : rgba(137, 150, 149 , 0.8);
    width : 360px ;
    align-items : center;
    border-radius : 20px ;
`;
const StyledForm = styled.form`
    padding : 12px ;
`;
const StyledButton = styled.button`
    border-radius : 24px ;
    margin-top : 12px ;
    margin-bottom : 8px ;
    width : 100%;
    color : white ;
    padding : 6px ;
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
    margin : 10px auto 0px 0px;
    border-radius : 4px ;
    padding : 8px ;
    text-align : middle ;
    width : 100% ;
`;


const StyledFieldSet = styled.fieldset`
    margin-bottom : 12px ;
`;

const SignUpForm = () => {

    const [passwordConfirmation, setPasswordConfirmation] = useState(false);

    const [PasswordInput, setPasswordInput] = useState(null);
    const [passwordConfirmationInput, setPasswordConfirmationInput] = useState(null);
    const [toolTipOpen, setToolTipOpen] = useState(false);

    const onPasswordChange = ({ target }) => {
        setPasswordInput(target?.value);
        if (target?.value != passwordConfirmationInput) {
            setToolTipOpen(true);
        }
        else if (target?.value == passwordConfirmationInput || target?.value.length == 0) {
            setToolTipOpen(false);
        }
        console.log(target?.value);
    }
    const onPasswordConfirmationChange = ({ target }) => {
        setPasswordConfirmationInput(target?.value);
        if (target?.value != PasswordInput) {
            setToolTipOpen(true);
        }
        else if (target?.value == PasswordInput || target?.value.length == 0) {
            setToolTipOpen(false);
        }
        console.log(target?.value);
    }

    return (
        <Wrapper>
            <StyledForm>
                <StyledFieldSet>
                    <StyledInputField type="name" placeholder="Username" />
                </StyledFieldSet>

                <StyledFieldSet>
                    <StyledInputField type="email" placeholder="email" />
                </StyledFieldSet>

                <fieldset>
                    <StyledInputField type="password" placeholder="Password" onChange={onPasswordChange} />
                    <StyledInputField type="password" placeholder="confirm your passoword"
                        onChange={onPasswordConfirmationChange} id="passwordConfirmInput" />
                    <Tooltip placement="top" isOpen={toolTipOpen} autohide={false} target="passwordConfirmInput" >
                        password confirmation is not equal to password
                    </Tooltip>
                </fieldset>

                <AlignMiddle>
                    <StyledButton type="submit" >
                        Sign up
                    </StyledButton>
                </AlignMiddle>

            </StyledForm>
        </Wrapper>)
};


export default SignUpForm;