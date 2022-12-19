import { useEffect } from "react";

const useOutSideClick = (ref : any, callback :any)  => {
    useEffect(() => {
        const handleClick = (event:any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback?.();
            }
            };
        
            window.addEventListener("mousedown", handleClick);
        
            return () => window.removeEventListener("mousedown", handleClick);
        }, [ref, callback]);
}

export default useOutSideClick;