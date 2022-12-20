import { instance } from "..";


// 마이페이지 조회
export const getMyPage = async(cookies:any) => {
    const url ='myPage';
    const response = await instance.get(
        url, 
        {headers :{
            'Authorization': 'Basic cm96ZXVzOnJvemV1czEyMyE=',
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        withCredentials : true})
        .then((response) => {
            return response;
        })
    return response;
}