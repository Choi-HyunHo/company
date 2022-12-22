import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom';
import React, {useState, useRef, useEffect} from "react";
import { login } from "../../api/Login/login";
import Modal from "../../components/common/Modal/Modal";
import { useCookies } from "react-cookie";
import { getMyPage } from './../../api/my/my';

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

const SignUpBtn = styled(SubmitBtn)`
    background-color : #FFFFFF;
    margin : 0;
`;

const SignUpText = styled(SubmitText)`
    font-family : ${(props) => props.theme.defaultFont.TextFont};
    color : #1484D6;
`

const ErrorText = styled.span`
    margin-top : 8px;
    font-size : 12px;
    color : gray;
`

const Login = () => {
    const navigate = useNavigate();

    const [userId, setUserId] = useState<String>('');
    const [pwd, setPwd] = useState<String>('');

    // 유효성 focus
    const userIdRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);

    // 유효성 메시지
    const [idText, setIdText] = useState<String>('');
    const [pwdText, setPwdText] = useState<String>('');

    // modal 여부
    const [isOpen, setIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState<String>('');

    // 쿠키
    // const [cookies, setCookie, removeCookie] = useCookies(['uid']) //eslint-disable-line
    // const [uid, setUid] = useState<Number>()

    const onClickButton = () => {
        setIsOpen(true);
    };


    const handleClick = () => {
        let data = {
            userId : userId,
            pwd: pwd,
            accessTp: "Z"
        }
        
        if(isValidEmail !== true){
            setIdText('이메일 형식을 준수 및 20글자 이하')
            userIdRef.current?.focus();
        }

        if(isValidPassword !== true){
            setPwdText('특수문자 1이상, 5글자 ~ 15글자 입력 해주세요')
            pwdRef.current?.focus();
        }


        if(isValidEmail && isValidPassword){
            login(data).then((res) => {
                localStorage.setItem('COM_USERINFO', JSON.stringify(res.data))
                setModalMessage(res && res.data.message);
                onClickButton();
            })
        }
    }
    

    // 이메일 검사: '@', '.' 이 둘다 포함될것.
    let isValidEmail = userId && userId.includes('@') && userId.includes('.') && userId.length <= 20;
    // 비밀번호 특수문자 검사를 위한 정규식표현.
    let specialLetter = pwd && pwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    // 특수문자 1자 이상, 전체 8자 이상일것.    
    let isValidPassword = pwd && specialLetter && pwd.length >= 5 && pwd.length <= 15 && specialLetter >= 1;


    return (
        <MainWrap>
            <Link to='/'>
                <ArrowBackIcon/>
            </Link>
            
            <LoginBox>
                <TitleWrap>
                    <Title>Login</Title>
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

                <div style={{height : '10px'}}></div>

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

                <SubmitBtn onClick={handleClick}>
                    <SubmitText>Submit</SubmitText>
                </SubmitBtn>

                <SignUpBtn onClick={() => navigate('/signup')}>
                    <SignUpText>Sign Up</SignUpText>
                </SignUpBtn>
            </LoginBox>
            {isOpen && <Modal open={isOpen} message={modalMessage} onClose={() => {setIsOpen(false)}}/>}
        </MainWrap>
    )
}

export default Login;