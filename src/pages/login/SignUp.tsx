import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import React, {useState} from "react";


const StyledCalendar = styled.div`
    background: transparent;

    & .MuiSvgIcon-root {
        width : 90px;
    }
`;


const MainWrap = styled.div`
    width : 500px;
    height : 700px;
    background-color : #FFFFFF;
    border-radius : 12px;
    padding : 24px;
`

const LoginBox = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`

const TitleWrap = styled.div`
    margin-top : 100px;
    margin-bottom : 50px;
`

const Title = styled.span`
    font-size : 32px;
    font-family : ${(props) => props.theme.defaultFont.LogoFont};
`

const InputLabel = styled.label`
    display : flex;
    flex-direction : column;
    font-family : ${(props) => props.theme.defaultFont.TextFont};
`

const Input = styled.input`
    border : 1px solid #EDEFF1;
    border-radius : 8px;
    width : 300px;
    height : 40px;
    padding : 15px 10px;

    &:focus {
        border : 1px solid #1484D6;
    }
`

const SubmitBtn = styled.button`
    width : 300px;
    height : 45px;
    background-color : #1484D6;
    border : 1px solid #1484D6;
    border-radius : 8px;
    cursor: pointer;
    margin : 20px 0;
`

const SubmitText = styled.span`
    font-family : ${(props) => props.theme.defaultFont.TextFont};
    color : #FFFFFF;
`

const SignUp = () => {

    // 달력 상태 값
    const [value, setValue] = useState();
    const handleChange = (newValue : any) => {
        setValue(newValue);
    };


    return (
        <MainWrap>
            <Link to='/'>
                <ArrowBackIcon/>
            </Link>

            <LoginBox>
                <TitleWrap>
                    <Title>Sign Up</Title>
                </TitleWrap>

                <InputLabel>
                    Email Address
                    <Input 
                        type='email'
                        required
                    />
                </InputLabel>

                <div style={{height : '10px'}}></div>

                <InputLabel>
                    Password
                    <Input 
                        type='password'
                        required
                    />
                </InputLabel>

                <InputLabel>
                    User Name
                    <Input 
                        type='text'
                        required
                    />
                </InputLabel>

        
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <StyledCalendar style={{marginTop : '15px'}}>
                    <DesktopDatePicker
                        label="Birth Day"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params : any) => <TextField {...params} />}
                    />
                    </StyledCalendar>
	            </LocalizationProvider>

                <SubmitBtn>
                    <SubmitText>Submit</SubmitText>
                </SubmitBtn>
            </LoginBox>

            
        </MainWrap>
    )
}

export default SignUp;