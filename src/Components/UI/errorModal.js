import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./errorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onErrorHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <Card cssClass={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.message}</div>
      <footer className={classes.actions}>
        <Button clickOn={props.onErrorHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onErrorHandler={props.onErrorHandler} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onErrorHandler={props.onErrorHandler}
        />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
