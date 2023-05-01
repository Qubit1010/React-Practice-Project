/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import classes from "./Model.module.css";

const Model = ({ children }) => {
  const navigate = useNavigate()
  
  function closeHandler() {
    navigate('../')
  }
  
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Model;
