import React from "react";
import { createPortal } from "react-dom";

const ModalContainer = ({ children } : any) => {
    return createPortal(<>{children}</>, document.getElementById("modal") as HTMLElement);
}

export default ModalContainer;