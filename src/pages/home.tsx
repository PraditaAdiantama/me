import { useState } from "react";
import Step from "../components/Step";

const Carier = () => {
  return (
    <div className="bg-white dark:bg-slate-800 py-6 md:px-14 px-8 shadow-xl hover:shadow-2xl rounded-xl h-fit mt-5">
      <h3 className="text-xl mt-2 font-bold text-center dark:text-white">
        My Study & Carier
      </h3>
      <div className="flex flex-col justify-center items-start mt-5">
        <Step text="SDN Sinomwidodo 02 (2012 - 2016)" />
        <Step text="SMP N 1 Tambakromo (2016 - 2021)" />
        <Step text="SMK Tunas Harapan Pati (2021 - 2024)" />
        <Step text="PT FDN (2024)" end />
      </div>
    </div>
  );
};

const Introduction = () => {
  return (
    <div className="bg-white dark:bg-slate-800 w-4/2 py-6 md:px-10 px-5 shadow-xl hover:shadow-2xl rounded-xl h-fit">
      <h3 className="text-xl mt-2 font-bold text-center dark:text-white">
        Introduction
      </h3>
      <p className="text-center mt-3 dark:text-white">
        Hello, my name is <strong>Muhamad Pradita Adiantama</strong>, i am a
        sofware developer. i used to make an app or website
      </p>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-800 py-6 px-10 shadow-xl hover:shadow-2xl rounded-xl h-fit">
      <h3 className="text-xl mt-2 font-bold text-center dark:text-white">
        About Me
      </h3>
      <div className="flex justify-center mt-5">
        <img
          src="https://avatars.githubusercontent.com/u/81001767?v=4"
          className="rounded-full w-52 h-52 hover:animate-spin transition ease-in-out"
        />
      </div>
      <p className="text-center md:px-10 text-base mt-5 dark:text-white">
        <strong>Muhamad Pradita Adiantama</strong>, i used to call by Pradita,
        Adit, Or Lyod. I was born at 07 November 2006 a son of a farmer who
        wanted to be a software engineer
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="bg-white dark:bg-slate-800 px-10 py-6 shadow-xl hover:shadow-2xl rounded-xl mt-5">
      <h3 className="text-xl mt-2 font-bold text-center dark:text-white">
        My Media Sosial
      </h3>
      <div className="flex md:gap-20 gap-5 justify-center mt-10">
        <a href="https://www.instagram.com/adiantama_pradita" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            className="w-14 h-14 transition ease-in-out hover:scale-110"
          />
        </a>
        <a href="https://discord.gg/JU5VzEdpDh" target="_blank">
          <img
            src="https://static.cdnlogo.com/logos/d/43/discord.svg"
            className="w-14 transition ease-in-out hover:scale-110"
          />
        </a>
        <a href="https://github.com/PraditaAdiantama" target="_blank">
          <img
            src="https://cdnlogo.com/logos/g/55/github.svg"
            className="w-14 transition ease-in-out hover:scale-110 bg-white dark:bg-transparent rounded-full"
          />
        </a>
      </div>
    </div>
  );
};

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <div className="mt-5">
      <div className="flex max-lg:flex-col gap-5">
        <div>
          <Introduction />
          {screenWidth > 1000 && <Carier />}
        </div>
        <div>
          <AboutMe />
          {screenWidth < 1000 && <Carier />}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
