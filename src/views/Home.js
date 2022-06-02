import { Progress } from "@mantine/core";
import { Link } from "react-router-dom";
import { NativeT } from "../images/native";

const Home = () => {
  const age = () => {
    var today = new Date();
    var birthDate = new Date(2002, 3, 14);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="pb-52">
      {/*<div className="absolute h-44 skew-y-3 bg-stone-800 mt-28 w-full">
            s
    </div>*/}

      <div className="mt-52">
        <h1 className="text-6xl mt-10" id="presentation">
          Présentation
        </h1>
        <div className="text-xl mt-7">
          Je m'appelle Johan ROUSSEAU, j'ai {age()} ans.<br />
          Je suis en 2ème année de BTS Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers.
          <br />
          <h2 className="text-2xl mt-7">Mes loisirs</h2>
          <ul className="list-disc mt-3">
            <li className="ml-5">Programmation informatique</li>
            <li className="ml-5">Pratique de la musique (clarinette depuis 12ans)</li>
            <li className="ml-5">Natation</li>
            <li className="ml-5">Cinéma</li>
            <li className="ml-5">Jeux vidéo</li>
          </ul>
        </div>
      </div>

      <div className="mt-36">
        <h1 className="text-6xl mt-10 text-right" id="skills">
          Compétences
        </h1>

        <h2 className="text-2xl mt-7 text-right">
          Outils et Framework pour le développement
        </h2>
        <div className="text-xl text-right">
          Maven, Composer, Symfony, Git, React, NPM 
        </div>

        <h2 className="text-2xl mt-7 text-right">Logiciels de développement</h2>
        <div className="text-xl text-right">
          Intellij IDA, Visual Studio code, Eclipse 2020, PhpStorm 
        </div>

        <h2 className="text-2xl mt-7 text-right">Langages informatiques</h2>
        <div className="text-xl flex justify-end">
          <div className="mr-5">
            JAVA
            <Progress
              value={93}
              size={"xl"}
              label="68%"
              className="w-52"
              color={"red"}
            />
          </div>
          <div className="mr-5">
            HTML
            <Progress
              value={90}
              size={"xl"}
              label="75%"
              className="w-52"
              color={"orange"}
            />
          </div>
        </div>
        <div className="text-xl mt-7 flex justify-end ">
          <div className="mr-5">
            JavaScript
            <Progress
              value={90}
              size={"xl"}
              label="60%"
              className="w-52"
              color={"yellow"}
            />
          </div>
          <div className="mr-5">
            PHP
            <Progress
              value={75}
              size={"xl"}
              label="70%"
              className="w-52"
              color={"indigo"}
            />
          </div>
        </div>

        <div className="text-xl mt-7 flex justify-end ">
            <div className="mr-5">
                CSS
                <Progress
                    value={68}
                    size={"xl"}
                    label="48%"
                    className="w-52"
                    color={"cyan"}
                />
            </div>
          <div className="mr-5">
            MySQL
            <Progress
              value={79}
              size={"xl"}
              label="75%"
              className="w-52"
              color={"orange"}
            />
          </div>
        </div>
        <div className="text-xl flex justify-end">
          <div className="mr-5">
            Python
            <Progress
              value={90}
              size={"xl"}
              label="75%"
              className="w-52"
              color={"blue"}
            />
          </div>
        </div>

        <h2 className="text-2xl mt-7 text-right">Langues</h2>
        <div className="text-xl text-right">
          Français, Anglais 
        </div>
      </div>

      <div className="mt-36">
        <h1 className="text-6xl mt-10" id="projects">
          Projets
        </h1>

        <div className="text-4xl mt-8 flex flex-col justify-center">
          <Link
            to={"/project/afterwork-web"}
            className="border-2 rounded w-2/3 mb-6 mx-auto shadow-lg p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 web-app"
          >
            Afterwork : Site internet
          </Link>
          <Link
            to={"/project/afterwork-app"}
            className="border-2 rounded w-2/3  mb-6  mx-auto shadow-lg p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 native-app"
          >
            AfterWork : Application portable
          </Link>
          <Link
            to={"/project/antikcube"}
            className="border-2 rounded w-2/3  mb-6  mx-auto shadow-lg p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 antik-plugins"
          >
            AntikCube: Plugins
          </Link>
        </div>
      </div>

      <div className="mt-36">
        <h1 className="text-6xl mt-10 text-right" id="contact">
          Professionnel
        </h1>

        <h2 className="text-2xl mt-8 text-right">Entreprise c.NEUVILLE (06/2021)</h2>
        <div className="text-lg text-right mb-2">
          Développeur Backend et Frontend 
        </div>
        <div className="text-xl text-right">
          Réalisation d'un site vitrine de 0.<br/>
          Maquettage, puis réalisation du site en fonction du client.
        </div>
        <h2 className="text-2xl mt-8 text-right">
          L'Artisan Média (Du 24/01/2022 au 18/04/2022)
        </h2>
        <div className="text-lg text-right mb-2">
          Développeur Fullstack 
        </div>
        <div className="text-xl text-right">
          Mise en place de moyen de scraping des fédération de judo et karaté.<br/>
          Dans le but d'allimenter une base de donnée d'application
        </div>
      </div>

      <div className="mt-36">
        <h1 className="text-6xl mt-10" id="contact">
          Contact
        </h1>

        <h2 className="text-2xl mt-7">Adresse mail</h2>
        <div className="text-xl">
          <a className="border-b-2" href="mailto:johan.rousseau39@gmail.com">
            johan.rousseau39@gmail.com
          </a>
        </div>

        <h2 className="text-2xl mt-7">Téléphone</h2>
        <div className="text-xl">
          <a className="border-b-2" href="tel:+33624422900">
            06.24.42.29.00
          </a>
        </div>

        <h2 className="text-2xl mt-7">Linkedin</h2>
        <div className="text-xl">
          <a href="https://fr.linkedin.com/in/johan-rousseau-16096a20b?challengeId=AQERec60tUjO8wAAAYEk4b2OZM3KajhrMOCnRtz71Fn9MoloI_blGFh98ZgdDAJvNmjmeE8PKHVSsip9GlwA8bq63HKMj2CJcg&submissionId=fa5a1575-05d5-f416-3cb6-68530c126669&original_referer="
             className="border-b-2">
            Johan ROUSSEAU
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
