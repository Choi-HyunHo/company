import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getDetailBoard } from "../../api/board/board";
import Share from "../../components/icon/Share";
import UpBtn from "../../components/icon/UpBtn";
import DownBtn from "../../components/icon/DownBtn";
import Comment from "../../components/icon/Comment";
import styled from "styled-components";
import Comments from "../../components/common/Comment/Comments";
import React from "react";

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
    background-color : #F8F9FA;
`

// const LikeCount = styled.span`
//     padding : 10px 0;
// `

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

const CommentsBox = styled.div`
    width : 300px;
    background-color: white;
`

const DetailBoard = () => {
    let params = useParams<any>();
    const {data} = useQuery<any>(['getDetailBoard', params.bid, params.pid], () => getDetailBoard(params.bid, params.pid));
    
    return (
        <React.Fragment>
            <MainWrap>
                {data && 
                <BoardContainer>
                    <div style={{display : 'flex'}}>
                        <UpDownBox>
                            <UpBtn/>
                            {/* <LikeCount>{data.data.data[0].i.likeCount}</LikeCount> */}
                            <DownBtn/>
                        </UpDownBox>
                        <BoardInfoTop>
                            <BoardCategory>
                                <div>
                                    <BoardSpan>{data.data.data[0].boardName}</BoardSpan>
                                    <Line></Line>
                                    <BoardSpan>{data.data.data[0].title}</BoardSpan>
                                </div>
                                <BoardSpan>{data.data.data[0].regDt.substr(0,10)}</BoardSpan>
                            </BoardCategory>
                                <div style={{display : 'flex', flexDirection : 'column'}}>
                                    <BoardInfoBottom>
                                        <BoardSpan>{data.data.data[0].contents}</BoardSpan>
                                        <div style={{display : 'flex', justifyContent : 'space-around', marginTop : '20px'}}>
                                            <Share/>
                                            <Comment/>
                                        </div>
                                    </BoardInfoBottom>
                                </div>
                        </BoardInfoTop>
                    </div>
                </BoardContainer>
                }
            </MainWrap>
            <Comments/>
        </React.Fragment>
        
    )
}

export default DetailBoard;