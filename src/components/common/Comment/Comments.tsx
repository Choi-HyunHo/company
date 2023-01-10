import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const MainWrap = styled.div`
    background-color : #DAE0E6;
    min-height : 200px;
`

const Input = styled.input`
    padding : 16px 20px;
    width : 650px;
    border : none;
`

const Comments = () => {
    const [value, setValue] = useState<any>();
    const [comment, setComment] = useState<any>([]);
    const dataId = useRef(0);

    useEffect(() => {
        console.log(comment)
    }, [comment])

    const onCreate = () => {
        setComment(() => [value, ...comment]);
    }

    return (
        <MainWrap>
            <Input
                type='text' 
                placeholder="게시물에 대한 소감을 입력 해주세요!" 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            ></Input>
            <button onClick={onCreate}>입력</button>

        </MainWrap>        
    )
}

export default Comments;