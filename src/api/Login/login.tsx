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

// 참고 코드
// export const signIn = async (id, password) => {
//     const response = await instance.post(
//         `/user/sign-in`,
//         { login_id: id, password: password },
//         {
//             headers: {
//                 'content-type': 'application/json'
//             }
//         }
//     )
//         .then((response) => {
//             return response;
//         }).catch(error => {
//             return error.response;
//         })
//     return response;
// }

// export const getUserInfo = async () => {

//     const userInfo = localStorage.getItem('ROZ_ADMIN_USERINFO')
//     console.log(userInfo)
//     if (userInfo) {
//         const jsonUser = JSON.parse(userInfo)
//         const header = {
//             headers: {
//                 'Authorization': 'Bearer ' + jsonUser.accessToken
//             },
//         }
//         const response = await instance.get('/user/' + jsonUser.uid, header, null)
//             .then((response) => {
//                 return response.status === 200 && response.data;
//             })
//             .catch(err => {
//                 return null;
//             })

//         return response;
//     }
//     return null;

// }