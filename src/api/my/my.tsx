import { instance } from "..";


// 마이페이지 조회
export const getMyPage = async(uid:any) => {
    const response = await instance.get(`myPage?uid=${uid}`) 
        .then((response) => {
            return response;
        })
    return response;
}