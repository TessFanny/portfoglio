import React, { useState } from "react";
const jokes = [
  {
    question: "Pourquoi les développeurs détestent-ils la nature ?",
    answer: " Parce que c'est sans version !",
  },
  {
    question: "Combien de développeurs faut-il pour changer une ampoule ?",
    answer: "  Aucun, c'est un problème Hardware",
  },
  {
    question: "Comment un développeur se fait-il un sandwich ? ",
    answer: " sudo make me a sandwich",
  },
  {
    question: "Pourquoi les développeurs détestent-ils la plage ? ",
    answer: "À cause du soleil, du sable et des bugs",
  },
  {
    question: "Quel est le plat préféré d'un développeur ? ",
    answer: `Les "bits" à la sauce "octet"`,
  }
  ,
  {
    question: "Pourquoi le développeur était-il si bon au football ?",
    answer: `Parce qu'il était excellent pour manipuler les balises.`,
  }
  ,
  {
    question: "Quel est le comble pour un développeur web ? ",
    answer: `De ne pas avoir de support.`,
  }
  ,
  {
    question: "Quelle est la manière orientée objet de devenir riche ?",
    answer: `L'héritage`,
  }
  ,
  {
    question: "Comment un développeur tente-t-il de réparer sa voiture lorsqu'elle a un problème ?",
    answer: `Il sort de la voiture, ferme toutes les fenêtres, retourne dans la voiture, et essaie de redémarrer.`,
  }
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Jokes = () => {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    console.log(getRandomInt(0, jokes.length));
    setIndex((prev) => getRandomInt(0, jokes.length - 1));
  };
  return (
    <article className="border-[1px] border-slate-400 h-full rounded-md flex flex-col items-center justify-center p-2">
      {jokes && (
        <div className=" text-center">
          <p className=" mb-3 text-slate-200"> {jokes[index].question} </p>
          <p className=" text-white font-semibold"> {jokes[index].answer} </p>
        </div>
      )}

      <button onClick={handleClick} className=" mt-10 cursor-pointer  bg-transparent textColor border-[1px] border-[#f27c6d] px-4 py-2 text-md font-semibold rounded-md hover:bgColor hover:scale-105  hover:text-[#181729] duration-300 delay-200 ease-in-out"> Générer une blague</button>
    </article>
  );
};

export default Jokes;
