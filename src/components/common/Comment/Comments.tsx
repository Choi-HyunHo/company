import React, { useState } from "react";
import styled from "styled-components";

const MainWrap = styled.div`
    background-color : #DAE0E6;
    min-height : 200px;
`

const Input = styled.input`
    padding : 16px 20px;
    width : 650px;
    border : none;
    border-top : 1px solid #DAE0E6;
`

const Comments = () => {
    const [value, setValue] = useState<any>();
    const [comment, setComment] = useState<any>([]);


    const onCreate = (e : any) => {
        if(e.key === 'Enter' || e.key === 13){
            setComment(() => [value, ...comment]);
        }
    }

    return (
        <MainWrap>
            <Input
                type='text' 
                placeholder="게시물에 대한 소감을 입력 해주세요!" 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                onKeyPress={(e) => onCreate(e)}
            ></Input>
            {comment && comment.map((item : any, index : number) => <div>{item}</div>)}
        </MainWrap>        
    )
}

export default Comments;