import "./Home.css";

import FwdBtn from "../../components/FwdBtn/FwdBtn";
import LrgBtn from "../../components/LrgBtn/LrgBtn";
import LoadPage from "../../components/LoadPage/LoadPage";
import { useState } from "react";

function Home() {
  const [iisLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return <>{iisLoading && <LoadPage />}</>;
}

export default Home;
