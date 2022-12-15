import styled from 'styled-components';
import { useQuery } from 'react-query';
import React, {useEffect, useState} from 'react';
import { getBoard } from './../../../api/board/board';

const MainWrap = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    height : 100%;
    margin-top : 30px;
`

const BoardContainer = styled.div`
    background-color : #FFFFFF;
    border-radius : 10px;
    width : 650px;
    padding : 20px 10px;
    margin : 30px 0px;
`

const BoardInfoTop = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-around;
`

const BoardList = () => {
    const [board, setBoard] = useState<any>();
    const {data, isLoading} = useQuery('getBoard', () => getBoard());

    useEffect(()=>{
        setBoard(data && data.data.data[0].boardList)
        console.log(board)
    },[board, isLoading]) // eslint-disable-line react-hooks/exhaustive-deps


    if(isLoading){
        return <h1>로딩 중 입니다.</h1>
    } // return 아래에 react hook 두지 말 것


    return (
        <MainWrap>
            {board && board.map((i:any, index:any) => ( 
                <BoardContainer key={index}>
                    <BoardInfoTop>
                        <span>{i.boardName}</span>
                        <span>{i.title}</span>
                        <span>{i.regDt}</span>
                    </BoardInfoTop>
                    <div>
                        <span>{i.contents}</span>
                        <span>{i.cmtCount}</span>
                    </div>
                </BoardContainer>
            ))}
        </MainWrap>
    )
}

export default BoardList;