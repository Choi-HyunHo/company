import styled from "styled-components";

const Btn = styled.button`
    background-color : inherit;
    border : 1px solid #1484D6;
    border-radius : 30px;
    padding : 5px 30px;
`

const BtnText = styled.span`
    display : inline-block;
    text-align : center;
    color : #1484D6;
    font-weight : bold;
`


const SignUp = () => {
    return (
        <Btn>
            <BtnText>Sign Up</BtnText>
        </Btn>
    )
}

export default SignUp;