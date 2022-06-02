import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Projects from "../config/projects";

const Project = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2].replace("-", "_");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const languages = Projects[path].languages.map((v, i) => (
    <li key={i} className="ml-5">
      {v}
    </li>
  ));
  const tools = Projects[path].tools.map((v, i) => (
    <li key={i} className="ml-5">
      {v}
    </li>
  ));

  const sources = Projects[path].sources.map((v, i) => (
    <li key={i} className="ml-5">
      <a href={v} className="border-b-2" target={"_blank"}>
        {v}
      </a>
    </li>
  ));

  return (
    <div className="pb-32">
      <div className="mt-32">
        <h1 className="text-6xl mt-10" id="presentation">
          {Projects[path].title}
        </h1>
        <div className="text-xl">{Projects[path].type}</div>
        <h2 className="text-2xl mt-10">Le contexte :</h2>
        <div className="text-xl mt-3">{Projects[path].context}</div>

        <h2 className="text-2xl mt-10">Les langages utilisés :</h2>
        <ul className="list-disc mt-3">{languages}</ul>

        <h2 className="text-2xl mt-10">Les outils utilisés :</h2>
        <ul className="list-disc mt-3">{tools}</ul>

        <h2 className="text-2xl mt-10">La production :</h2>
        <div className="mt-3">{Projects[path].content}</div>

        {sources.length > 0 && (
          <>
            <h2 className="text-2xl mt-10">Liens :</h2>
            {sources}
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
