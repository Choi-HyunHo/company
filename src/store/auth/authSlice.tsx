import { createSlice } from "@reduxjs/toolkit";

// initalState 타입 정의
type StateType = {
    uid : number;
    userId : string;
    nickname : string;
    gender : number;
    birthday : string;
    accessTp : string;
    locationYn : number;
    userType : string;
    userScroll : number;
    scrollBox : number;
}

// initalState 생성
const initialState:StateType = {
    uid: 0,
    userId: "",
    nickname: "",
    gender: 1,
    birthday: "",
    accessTp: "",
    locationYn: 1,
    userType: "",
    userScroll : 0,
    scrollBox : 0
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        loginSuccess: (state:StateType, action) => {
            const {uid, userId, nickname, gender, birthday, accessTp,
            locationYn, userType} = action.payload;
            state.uid = uid;
            state.userId = userId;
            state.nickname = nickname;
            state.gender = gender;
            state.birthday = birthday;
            state.accessTp = accessTp;
            state.locationYn =  locationYn;
            state.userType = userType;
        },

        scrollPoint : (state:StateType, action) => {
            state.userScroll = action.payload;
        },

        scrollContainer : (state:StateType, action) => {
            state.scrollBox = action.payload;
        },
    }
})


const { actions, reducer } = authSlice;

export const {
    loginSuccess,
    scrollPoint,
    scrollContainer
} = actions;

export default reducer;