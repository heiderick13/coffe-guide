import "./LrgBtn.css";

function LrgBtn({ content, bgColor, txtColor }) {
  return (
    <button
      className="btn lrgBtn"
      type="button"
      style={{ backgroundColor: `var(${bgColor})`, color: `var(${txtColor})` }}
    >
      {content}
    </button>
  );
}

export default LrgBtn;
