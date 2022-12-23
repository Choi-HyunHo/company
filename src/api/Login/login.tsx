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


export const getUserInfo = async () => {
    const userInfo = localStorage.getItem('COM_USERINFO')
    if (userInfo) {
        const userUid = JSON.parse(userInfo)
        const header = {
            headers: {
                'Authorization': 'Bearer ' + userUid.data[0].accessToken
            },
        }
        const response = await instance.get('getUserInfo/' + userUid.data[0].uid, header)
            .then((response) => {
                return response.status === 200 && response.data;
            })
            .catch(err => {
                return null;
            })

        return response;
    }
    return null;

}