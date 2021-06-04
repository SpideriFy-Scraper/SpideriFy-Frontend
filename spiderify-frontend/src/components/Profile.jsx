import React, { useState } from "react";
import { FixedSizeList } from 'react-window';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
import styled from "styled-components";
//import axios from "axios";

const FormContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
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
const StyledFixedSizeList = styled(FixedSizeList)`
    background-color : rgba(117, 115, 115, 0.6);
    color : white ;
    transition-duration : 0.7s ;

    &:hover  {
        background-color : rgba(117, 115, 115, 0.9);
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

const Profile = () => {

    const [Password, setPassword] = useState(null);
    const [Fullname, setFullname] = useState(null);
    const [Email, setEmail] = useState(null);
    const [Phonenumber, setPhonenumber] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const urlset = [
        "https://web.dev/virtualize-long-lists-react-window/",
        "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_outputh",
        "https://web.dev/virtualize-long-lists-react-window/",
        "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_outputh",
        "https://web.dev/virtualize-long-lists-react-window/",
        "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_outputh",

    ];

    const RenderRow = ({ index }) => (
        <div style={{ margin: "8px" }}><p> {urlset[index]}</p></div>
    )


    //const url_re = renderSafe(RenderRow);

    const onEditClick = (event) => {
        // TODO: fetch comments from server and set it in the state
        setIsLoading(true)
        // axios
        //     .post('http://localhost:8080/SignUp' , {
        //         password : Password,
        //         fullname : Fullname,
        //         email : Email,
        //         setPhonenumber : Phonenumber
        //     })
        //     .then((response) => {
        setIsLoading(false);
        //         const result = response.data;
        //         if (response.status == 301)
        //             window.alert("username has been registered! try another username");
        //         else if(response.status == 302)
        //             window.alert("email has been registered! try another email");
        //         else if(response.status == 200)
        //             window.alert("you have successfully logged in");
        //         else
        window.alert("sorry sth is wrong!!! ");
    };//);

    const onPasswordChange = ({ target }) => {
        setPassword(target?.value);
    };

    const onFullnameChange = ({ target }) => {
        setFullname(target?.value);
    };

    const onEmailChange = ({ target }) => {
        setEmail(target?.value);
    };

    const onPhonenumberChange = ({ target }) => {
        setPhonenumber(target?.value);
    };

    return (
        <FormContainer>
            <FormWrapper>
                <WhiteHeader>account information</WhiteHeader>
                <div className="form-group">
                    <Lab>Fullname</Lab>
                    <input
                        type="text"
                        className="form-control"
                        defaultValue="value"
                        onChange={onFullnameChange}
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

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={onEditClick}>
                    Edit Profile
                </button>
            </FormWrapper>

            <div>
                <WhiteHeader>History</WhiteHeader>

                <StyledFixedSizeList height={300} width={600} itemSize={46} itemCount={10}>
                    {/*{urlset?.map((value, index) => {*/}
                    {/*    return <div key={index}>{value}</div>;*/}
                    {/*})}*/}
                    {RenderRow}
                </StyledFixedSizeList>
            </div>
        </FormContainer>
    );
};

export default Profile;
