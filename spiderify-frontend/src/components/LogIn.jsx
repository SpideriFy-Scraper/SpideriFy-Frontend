import React, {Component, useState} from "react";
import styled from "styled-components";
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
  width : 40% ;
`;

const WhiteHeader = styled.h3`
  color: white;
  font-size: 2rem;
  text-align: center
`;
const Lab = styled.label`
  color: white;
`;

const LogIn = () => {

    const [Username, setUsername] = useState(null);
    const [Password, setPassword] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSignInClick = (event) => {
        // TODO: fetch comments from server and set it in the state
        setIsLoading(true)
        axios
            .post('http://localhost:8080/user/LogIn' , {
                username : Username,
                password : Password
            })
            .then((response) => {
                setIsLoading(false);
                const result = response.data;
                if (response.status == 401)
                    window.alert("Invalid Credentials");
                else if(response.status == 200)
                {
                    document.getElementById("LogIn").style.display = "none";
                    document.getElementById("SignIn").style.display = "none";
                    console.log(response.data)
                    localStorage.setItem("token", result["Authorization"]);
                    localStorage.setItem("valid", true);
                }
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

    return (
        <FormContainer>
            <FormWrapper>

                <WhiteHeader>Log in</WhiteHeader>

                <div className="form-group">
                    <Lab>Username</Lab>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Username"
                        onChange={onUsernameChange}
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

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <Lab className="custom-control-label" htmlFor="customCheck1">Remember me</Lab>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={onSignInClick}>
                    Log in
                </button>

                <p className="text-right">
                     do not have any account?!!<a href="/SignUp">SignUp?</a>
                </p>

            {/*<p className="forgot-password text-right" color="white">*/}
            {/*    Forgot <a href="#">password?</a>*/}
            {/*</p>*/}
            </FormWrapper>
        </FormContainer>
    );
}

export default LogIn
