import { instance } from "..";

// 마이페이지 조회
export const getMyPage = async() => {
    const url ='myPage';
    const response = await instance.get(url)
        .then((response) => {
            return response;
        })
    return response;
}