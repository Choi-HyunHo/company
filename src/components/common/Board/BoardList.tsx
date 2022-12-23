import styled from 'styled-components';
import { useQuery } from 'react-query';
import React, {useEffect, useState} from 'react';
import { getBoard } from './../../../api/board/board';
import FadeLoader from 'react-spinners/FadeLoader';
import { useSelector } from 'react-redux';


const MainWrap = styled.div`
    position : absolute;
    top : 10px;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
`

const BoardContainer = styled.div`
    background-color : #FFFFFF;
    border-radius : 10px;
    width : 650px;
    margin : 30px 0px;
`

const BoardInfoTop = styled.div`
    width : 100%;
    display : flex;
    flex-direction : row;
    justify-content : space-evenly;
    padding : 10px 5px;
`
const BoardCategory = styled.div`
    width : 300px;
`

const BoardSpan = styled.span`
    font-family : ${(props) => props.theme.defaultFont.KoreaFont};
`

const BoardInfoBottom = styled.div`
    padding : 0px 5px;
` 

const Line = styled.div`
    width: 2px;
    height: 11px;
    background-color : #DAE0E6;
    display : inline-block;
    margin : 0px 10px;
`

const BoardList = () => {
    const [board, setBoard] = useState<any>();
    const {data, isLoading} = useQuery('getBoard', () => getBoard());

    const {uid} = useSelector((state:any) => state.auth)

    useEffect(()=>{
        setBoard(data && data.data.data[0].boardList)
        console.log(board)        
        console.log(uid)
    },[uid, board, isLoading]) // eslint-disable-line react-hooks/exhaustive-deps


    if(isLoading){
        return <FadeLoader color="#3399ff" height={20}/>
    } // return 아래에 react hook 두지 말 것


    return (
        <MainWrap>
            {board && board.map((i:any, index:any) => ( 
                <BoardContainer key={index}>
                    <BoardInfoTop>
                        <BoardCategory>
                            <BoardSpan>{i.boardName}</BoardSpan>
                            <Line></Line>
                            <BoardSpan>{i.title}</BoardSpan>
                        </BoardCategory>
                        <BoardSpan>{i.regDt.substr(0,10)}</BoardSpan>
                    </BoardInfoTop>
                    <BoardInfoBottom>
                        <BoardSpan>{i.contents}</BoardSpan>
                        <BoardSpan>{i.cmtCount}</BoardSpan>
                    </BoardInfoBottom>
                </BoardContainer>
            ))}
        </MainWrap>
    )
}

export default BoardList;