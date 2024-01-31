import "./Home.css";

import LoadPage from "../../components/LoadPage/LoadPage";
import { useState } from "react";

function Home() {
  const [iisLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {iisLoading && <LoadPage />}
      <div className="construction-container hidden">
        <a
          href="https://storyset.com/transport"
          target="blank"
          title="Transport illustrations by Storyset"
        >
          <img className="construction hidden" src="/construction.svg" alt="" />
        </a>
        <h1>Página em construção 😓</h1>
        <div className="construction-dialog">
          Utilize um smartphone ou o "dev tools" para visualizar o conteúdo.
        </div>
      </div>
    </>
  );
}

export default Home;
