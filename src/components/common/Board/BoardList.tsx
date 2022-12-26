import styled from 'styled-components';
import { useQuery } from 'react-query';
import React, {useEffect, useState} from 'react';
import { getBoard } from './../../../api/board/board';
import FadeLoader from 'react-spinners/FadeLoader';
import { useSelector } from 'react-redux';
import UpBtn from '../../icon/UpBtn';
import DownBtn from '../../icon/DownBtn';
import Share from '../../icon/Share';
import Comment from '../../icon/Comment';


const MainWrap = styled.div`
    position : absolute;
    top : 10px;
`

const BoardContainer = styled.div`
    background-color : #FFFFFF;
    border-radius : 10px;
    width : 650px;
    min-height : 200px;
    margin : 30px 0px;
    position : relative;
`

const UpDownBox = styled.div`
    display : flex;
    flex-direction : column;
    width : 60px;
    min-height : 200px;
    justify-content : center;
    align-items : center;
`

const LikeCount = styled.span`
    padding : 10px 0;
`

const BoardInfoTop = styled.div`
    width : 100%;
    min-height : 200px;
    margin-top : 10px;
`
const BoardCategory = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-around;
`

const BoardSpan = styled.span`
    font-family : ${(props) => props.theme.defaultFont.NotoKoreaFont};
`

const BoardInfoBottom = styled.div`
    margin : 20px 20px;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    min-height : 200px;
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
        console.log('redux' , uid)
    },[uid, board, isLoading]) // eslint-disable-line react-hooks/exhaustive-deps


    if(isLoading){
        return <FadeLoader color="#3399ff" height={20}/>
    } // return 아래에 react hook 두지 말 것


    return (
        <MainWrap>
            {board && board.map((i:any, index:any) => ( 
                <BoardContainer key={index}>
                    <div style={{display : 'flex'}}>
                        <UpDownBox>
                            <UpBtn/>
                            <LikeCount>{i.likeCount}</LikeCount>
                            <DownBtn/>
                        </UpDownBox>
                        <BoardInfoTop>
                            <BoardCategory>
                                <div>
                                    <BoardSpan>{i.boardName}</BoardSpan>
                                    <Line></Line>
                                    <BoardSpan>{i.title}</BoardSpan>
                                </div>
                                <BoardSpan>{i.regDt.substr(0,10)}</BoardSpan>
                            </BoardCategory>
                                <div style={{display : 'flex', flexDirection : 'column'}}>
                                    <BoardInfoBottom>
                                        <BoardSpan>{i.contents}</BoardSpan>
                                        <div style={{display : 'flex', justifyContent : 'space-around', marginTop : '20px'}}>
                                            <Share/>
                                            <Comment/>
                                        </div>
                                    </BoardInfoBottom>
                                </div>
                        </BoardInfoTop>
                    </div>
                </BoardContainer>
            ))}
        </MainWrap>
    )
}

export default BoardList;