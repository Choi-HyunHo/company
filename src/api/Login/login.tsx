import { instance } from "..";

export const signUp = async(data : any) => {
    const url ='sign-up';
    const response = await instance.post(
        url,
        data,
        {
            headers: {
                'Authorization': 'Basic cm96ZXVzOnJvemV1czEyMyE=',
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            }
        }
    )
        .then((response) => {
            return response;
        }).catch(error => {
            return error.response;
        })
    return response;
}

export const login = async(data : any) => {
    const url = 'sign-in';
    const response = await instance.post(
        url,
        data,
        {
            headers: {
                'Authorization': 'Basic cm96ZXVzOnJvemV1czEyMyE=',
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        }
    )
        .then((response) => {
            return response;
        }).catch(error => {
            return error.response;
        })
    return response;
}