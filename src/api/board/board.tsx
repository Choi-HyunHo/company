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