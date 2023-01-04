import { instance } from "..";

// 게시판 리스트 조회
export const getBoard = async() => {
    const url ='board/1';
    const response = await instance.get(url)
        .then((response) => {
            return response;
        })
    return response;
}

// 게시글 상세 조회
export const getDetailBoard = async(bid:any, pid:any) => {
    const url = `board/${bid}/${pid}`;
    const response = await instance.get(url)
        .then((response) => {
            return response;
        })
    return response;
}