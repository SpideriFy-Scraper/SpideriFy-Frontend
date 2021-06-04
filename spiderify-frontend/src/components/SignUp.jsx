import React, { Component, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  width: 100%;
  > form {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    > .form-group {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`;

const FormWrapper = styled.div`
  width : 30% ;
  margin-right: 1rem;
`;

const WhiteHeader = styled.h3`
  color: white;
  font-size: 2rem;
  text-align: center
`;
const Lab = styled.label`
  color: white;
`;

const SignUp = () => {

    const [Username, setUsername] = useState(null);
    const [Password, setPassword] = useState(null);
    const [Firstname, setFirstname] = useState(null);
    const [Lastname, setLastname] = useState(null);
    const [Email, setEmail] = useState(null);
    const [Phonenumber, setPhonenumber] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSignUpClick = (event) => {
        // TODO: fetch comments from server and set it in the state
        setIsLoading(true)
        axios
            .post('http://192.168.30.128/SignUp' , {
                username : Username,
                password : Password,
                firstname : Firstname,
                lastname : Lastname,
                email : Email,
                setPhonenumber : Phonenumber
            })
            .then((response) => {
                setIsLoading(false);
                const result = response.data;
                if (response.status == 301)
                    window.alert("username has been registered! try another username");
                else if(response.status == 302)
                    window.alert("email has been registered! try another email");
                else if(response.status == 200)
                    window.alert("you have successfully logged in");
                else
                    window.alert("sorry sth is wrong!!! ");
            });
    };

    const onUsernameChange = ({ target }) => {
        setUsername(target?.value);
    };

    const onPasswordChange = ({ target }) => {
        setPassword(target?.value);
    };

    const onFirstnameChange = ({ target }) => {
        setFirstname(target?.value);
    };

    const onLastnameChange = ({ target }) => {
        setLastname(target?.value);
    };

    const onEmailChange = ({ target }) => {
        setEmail(target?.value);
    };

    const onPhonenumberChange = ({ target }) => {
        setPhonenumber(target?.value);
    };

    return (
        <div>
            <WhiteHeader>Register</WhiteHeader>
            <FormContainer>
                <FormWrapper>
                    <div className="form-group">
                        <Lab>First name</Lab>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter First name"
                            onChange={onFirstnameChange}
                        />
                    </div>

                    <div className="form-group">
                        <Lab>Email</Lab>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={onEmailChange}
                        />
                    </div>

                    <div className="form-group">
                        <Lab>Username</Lab>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Username"
                            onChange={onUsernameChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                        onClick={onSignUpClick}
                    >
                        Register
                    </button>
                    <Lab >
                        Already registered <a href="/user/LogIn">log in?</a>
                    </Lab>
                </FormWrapper>

                <FormWrapper>
                    <div className="form-group">
                        <Lab>Last name</Lab>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Last name"
                            onChange={onLastnameChange}
                        />
                    </div>

                    <div className="form-group">
                        <Lab>Phone number</Lab>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter Phone number"
                            onChange={onPhonenumberChange}
                        />
                    </div>

                    <div className="form-group">
                        <Lab>Password</Lab>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={onPasswordChange}
                        />
                    </div>
                </FormWrapper>
            </FormContainer>
        </div>
    );
}

export default SignUp
