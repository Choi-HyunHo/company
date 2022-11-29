import React from 'react';
import styled from 'styled-components';


const MainWrap = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    height : 100vh;
`

const ImgBox = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`
const Author = styled.div`
    font-family : ${(props) => props.theme.defaultFont.TextFont};
    font-size : 12px;
`

const ErrorPage = () => {
    return (
        <MainWrap>
            <ImgBox>
                <img 
                    src={`${process.env.PUBLIC_URL}/404.jpg`} 
                    alt="error" 
                    style={{width : '100vh'}}
                />
            </ImgBox>
            <Author>
                <a href="https://kr.freepik.com/free-vector/error-404-con   cept-for-landing-page_5156002.htm#query=404%20error%20page&position=0&from_view=keyword#position=0&query=404%20error%20page">작가 pikisuperstar</a> 출처 Freepik
            </Author>
        </MainWrap>
    )
}

export default ErrorPage;