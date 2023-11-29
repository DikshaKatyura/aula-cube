import { createPortal } from "react-dom";
import classes from './Modal.module.css';
const Backdrop =() =>{
    return <div className={classes.backdrop}></div>
}
const Overlay =(props) =>{
    return <div className={classes.overlay}>{props.children}</div>
}
const Modal =(props) =>{
    return(
        <>
        {createPortal(<Backdrop /> ,document.getElementById('overlays'))}
        {createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('overlays'))}
        </>
    )
}

export default Modal;