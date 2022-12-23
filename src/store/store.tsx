import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// slice
import authSlice from "./auth/authSlice";


const reducers = combineReducers({
    auth : authSlice
})

const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage,
    // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
    whitelist: ["auth"]
    // blacklist -> 그것만 제외합니다
};

const persistedReducer = persistReducer(persistConfig, reducers);

// 여기다가 지속적으로 추가
const store = configureStore({
    reducer : persistedReducer,
    // 미들웨어 추가 오류는 사용하지 않아도, 콘솔에 에러가 waring 이 나오기 때문
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;