import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import BlankStyle from "../../components/common/BlankStyle";

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
    margin-top : 30px;
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

const RadioBox = styled.div`
    width : 70%;
    display : flex;
    flex-direction : row;
    justify-content : space-around;
`

const RadioInput = styled.input`
    display : inline-block;
    margin-right : 10px;
    cursor : pointer;
`

const SDatePicker = styled(DatePicker)`
    border : 1px solid #EDEFF1;
    border-radius : 8px;
    width : 300px;
    height : 40px;
    padding : 15px 10px;
`

const SignUp = () => {

    // 달력 상태 값
    const [startDate, setStartDate] = useState<any>(new Date());

    useEffect(()=>{
        console.log(startDate.toISOString().slice(0,10))
    },[startDate])

    // radio 버튼 값
    const [radioVal , setRadioVal] = useState<String>('0');


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

                <BlankStyle/>

                <InputLabel>
                    Password
                    <Input 
                        type='password'
                        required
                    />
                </InputLabel>

                <BlankStyle/>

                <InputLabel>
                    User Name
                    <Input 
                        type='text'
                        required
                    />
                </InputLabel>

                <BlankStyle/>

                <InputLabel>
                    Birth Day
                    <SDatePicker 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} 
                        locale={ko}
                        dateFormat="yyyy/MM/dd"
                    /> 
                </InputLabel>

                <div style={{height : '20px'}}></div>

                <RadioBox onChange={(e:React.ChangeEvent<HTMLInputElement>) => setRadioVal(e.target.value)}>
                    <div style={{display : 'flex' , alignItems : 'center'}}>
                        <RadioInput 
                            type='radio' 
                            name="gender" 
                            value="1"
                            checked={radioVal === "1"}
                            readOnly
                        />
                        <InputLabel>Man</InputLabel>
                    </div>

                    <div style={{display : 'flex' , alignItems : 'center'}}>
                        <RadioInput 
                            type='radio' 
                            name="gender" 
                            value="2" 
                            checked={radioVal === "2"}  
                            readOnly
                        />
                        <InputLabel>Woman</InputLabel>
                    </div>

                    <div style={{display : 'flex' , alignItems : 'center'}}>
                        <RadioInput 
                            type='radio' 
                            name="gender" 
                            value='0' 
                            defaultChecked 
                        />
                        <InputLabel>No Select</InputLabel>
                    </div>
                </RadioBox>


                <SubmitBtn>
                    <SubmitText>Submit</SubmitText>
                </SubmitBtn>
            </LoginBox>

            
        </MainWrap>
    )
}

export default SignUp;