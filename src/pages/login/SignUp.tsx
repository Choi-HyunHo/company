import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import React, {useEffect, useState, useRef} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import BlankStyle from "../../components/common/BlankStyle";
import { signUp } from "../../api/Login/login";
import Modal from "../../components/common/Modal/Modal";

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
    margin-top : 20px;
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

const ErrorText = styled.span`
    margin-top : 8px;
    font-size : 12px;
    color : gray;
`

const SignUp = () => {
    // 이메일 값
    const [userId, setUserId] = useState<String>();

    // 비밀번호 값
    const [pwd, setPwd] = useState<String>();

    // 닉네임 값
    const [nickName, setNickName] = useState<String>();

    // 달력 상태 값
    const [startDate, setStartDate] = useState<any>(new Date());

    // radio 버튼 값
    const [radioVal , setRadioVal] = useState<String>('0');

    // checkbox 값
    const [checked, setChecked] = useState<Boolean>(false);

    // checkbox 값 변환 -> api 이거 전달하기
    const [locationYn, setLocationYn] = useState<any>();

    // 유효성 메시지
    const [idText, setIdText] = useState<String>('');
    const [pwdText, setPwdText] = useState<String>('');
    const [nameText, setNameText] = useState<String>('');

    // 유효성 focus
    const userIdRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);


    useEffect(()=>{
        if(checked === false){
            setLocationYn(0);
        } else {
            setLocationYn(1);
        }
    },[checked, locationYn]) // eslint-disable-line no-unused-vars

    // 이메일 검사: '@', '.' 이 둘다 포함될것.
    let isValidEmail = userId && userId.includes('@') && userId.includes('.') && userId.length <= 20;
    // 비밀번호 특수문자 검사를 위한 정규식표현.
    let specialLetter = pwd && pwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    // 특수문자 1자 이상, 전체 8자 이상일것.    
    let isValidPassword = pwd && specialLetter && pwd.length >= 5 && pwd.length <= 15 && specialLetter >= 1;
    // 닉네임 유효성 검사
    let isValidName =  (nickName && nickName === undefined) || (nickName && nickName.length > 1 && nickName.length <= 5);

    // modal 여부
    const [isOpen, setIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState<String>('');

    const onClickButton = () => {
        setIsOpen(true);
    };

    const handelSubmit = () => {
        let data = {
            userId : userId,
            pwd : pwd,
            nickname : nickName,
            gender : radioVal,
            birthday : startDate.toISOString().slice(0,10).replace(/-/g,''),
            locationYn : locationYn,
            accessTp : "Z",
            userType : "U"
        }

        if(isValidEmail !== true){
            setIdText('이메일 형식을 준수 및 20글자 이하')
            userIdRef.current?.focus();
        } else {
            setIdText('');
        }

        if(isValidPassword !== true){
            setPwdText('특수문자 1이상, 5글자 ~ 15글자 입력 해주세요')
            pwdRef.current?.focus();
        }

        if(isValidName === false || isValidEmail === undefined){
            setNameText('유저 이름은 필수 & 최소 2글자 ~ 5글자')
            nameRef.current?.focus();
        }

        if(isValidEmail && isValidPassword && isValidName){
            signUp(data).then((res)=>{
                if(res.data.status === 400 && res.data.message === '이메일 또는 닉네임 중복'){
                    setModalMessage(res && res.data.message);
                    onClickButton();
                } else {
                    setModalMessage(res && res.data.message);
                    onClickButton();
                }
            })
        } 
    }

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
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
                        ref={userIdRef}
                    />
                </InputLabel>
                {isValidEmail !== true ? <ErrorText>{idText}</ErrorText> : null}

                <BlankStyle/>

                <InputLabel>
                    Password
                    <Input 
                        type='password'
                        required
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)}
                        ref={pwdRef}
                    />
                </InputLabel>

                {isValidPassword !== true ? <ErrorText>{pwdText}</ErrorText> : null}

                <BlankStyle/>

                <InputLabel>
                    User Name
                    <Input 
                        type='text'
                        required
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNickName(e.target.value)}
                        ref={nameRef}
                    />
                </InputLabel>

                {isValidName !== true || (isValidName === undefined) ? <ErrorText>{nameText}</ErrorText> : null}

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

                <BlankStyle/>

                <div style={{display : 'flex'}}>
                    <input id="agree" type='checkbox' value={checked === false ? 0 : 1} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setChecked(!checked)}  />
                    <div style={{marginLeft : '20px'}}></div>
                    <InputLabel htmlFor="agree">위치 정보 동의</InputLabel>
                </div>
            

                <SubmitBtn onClick={handelSubmit}>
                    <SubmitText>Submit</SubmitText>
                </SubmitBtn>
                {isOpen && <Modal open={isOpen} message={modalMessage} onClose={() => {setIsOpen(false)}}/>}
            </LoginBox>

            
        </MainWrap>
    )
}

export default SignUp;