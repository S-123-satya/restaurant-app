import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlays = () => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
      {/* <p>shushi</p>
      <h3>Total price</h3>
      <p>34</p>
      <button>Close</button>
      <button>Order</button> */}
    </div>
  );
};
const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalElement
      )}
    </>
  );
};

export default Modal;
