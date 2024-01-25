import "./Home.css";

import FwdBtn from "../../components/FwdBtn/FwdBtn";
import LrgBtn from "../../components/LrgBtn/LrgBtn";

function Home() {
  return (
    <>
      <FwdBtn />
      <LrgBtn
        content={"Barista"}
        bgColor={"hsla(332, 90%, 33%, 1)"}
        txtColor={"--white-greyish"}
      />
    </>
  );
}

export default Home;
