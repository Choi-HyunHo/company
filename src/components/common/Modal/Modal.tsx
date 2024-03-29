import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import ModalContainer from "./ModalContainer";
import useOutSideClick from "../../../hooks/useOutSideClick";
import { useNavigate, useLocation } from 'react-router-dom';

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 9999;
`;

const ModalWrap = styled.div`
    width: 400px;
    height: fit-content;
    border-radius: 15px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Contents = styled.div`
    margin: 50px 30px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    h2 {
        font-family : ${(props) => props.theme.defaultFont.NotoKoreaFont};
        font-weight : 600;
        font-size: 30px;
        margin-bottom: 30px;
    }
    img {
        margin-top: 60px;
        width: 300px;
    }
`;
const Button = styled.button`
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    background-color: #ababab;
    border-radius: 10px;
    color: white;
    font-weight: 200;
    cursor: pointer;
    &:hover {
        background-color: #898989;
    }
`;

const Modal = ({onClose, message}: any) => {
    const navigate = useNavigate();
    const location = useLocation();
    const modalRef = useRef(null);
    
    const handleClose = () => {
        if(location.pathname === '/signup'){
            onClose?.();
            navigate('/login')
        }else{
            onClose?.();
        }
    };

    useEffect(() => {
        const $body = document.querySelector("body") as HTMLElement;
        const overflow = $body.style.overflow;
        $body.style.overflow = "hidden";
        return () => {
            $body.style.overflow = overflow
        };
    },[]);

    useOutSideClick(modalRef, handleClose);

    return (
        <ModalContainer>
            <Overlay>
                <ModalWrap ref={modalRef}>
                <Contents onClick={handleClose}>
                    <h2>{message}</h2>
                    <Button onClick={handleClose}>Close</Button>
                </Contents>
                </ModalWrap>
            </Overlay>
        </ModalContainer>
    );
}


export default Modal;