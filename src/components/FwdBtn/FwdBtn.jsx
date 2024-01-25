import "./FwdBtn.css";

import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

function fwdBtn({ isForward }) {
  return (
    <button className="fwdBtn">
      {isForward ? (
        <IoChevronForwardCircleOutline />
      ) : (
        <IoChevronBackCircleOutline />
      )}
    </button>
  );
}

export default fwdBtn;
