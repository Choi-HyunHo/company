import { useQuery } from 'react-query';
import React, {useEffect, useState} from 'react';
import { getBoard } from './../../../api/board/board';

const BoardList = () => {
    const [board, setBoard] = useState<any>();
    const {data, isLoading} = useQuery('getBoard', () => getBoard());

    useEffect(()=>{
        setBoard(data && data.data.data[0].boardList)
        console.log(board)
    },[board, isLoading]) // eslint-disable-line react-hooks/exhaustive-deps

    if(isLoading){
        return <h1>로딩 중 입니다.</h1>
    }  

    return (
        <React.Fragment>
            {board && board.map((i:any, index:any) => ( 
                <div key={index}>
                    <span>{i.boardName}</span>
                    <span>{i.contents}</span>
                    <span>{i.title}</span>
                    <span>{i.cmtCount}</span>
                    <span>{i.regDt}</span>
                </div>
            ))}
        </React.Fragment>
    )
}

export default BoardList;