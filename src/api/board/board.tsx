import { instance } from "..";

export const getBoard = async() => {
    const url ='board/1';
    const response = await instance.get(url)
        .then((response) => {
            return response;
        })
    return response;
}