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
        "https://www.amazon.com/Roku-Streaming-Stick-HDR-Streaming-Long-range/dp/B075XLWML4/ref=lp_16225009011_1_5",
        "https://www.amazon.com/HP-24mh-FHD-Monitor-Built/dp/B08BF4CZSV/ref=lp_16225009011_1_6",
        "https://www.amazon.com/Apple-EarPods-Lightning-Connector-White/dp/B01M0GB8CC/ref=lp_16225009011_1_4",
        "https://www.amazon.com/Mkeke-Compatible-iPhone-Protector-Tempered/dp/B07HRN9J19/ref=lp_16225009011_1_12",
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
                        defaultValue="homayoon Sadeghi"
                        onChange={onFullnameChange}
                    />
                </div>

                <div className="form-group">
                    <Lab>Email</Lab>
                    <input
                        type="email"
                        className="form-control"
                        defaultValue="homayoon.9171@gmail.com"
                        onChange={onEmailChange}
                    />
                </div>

                <div className="form-group">
                    <Lab>Phone number</Lab>
                    <input
                        type="tel"
                        className="form-control"
                        defaultValue="09339997777"
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

                <StyledFixedSizeList height={300} width={700} itemSize={46} itemCount={10}>
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
