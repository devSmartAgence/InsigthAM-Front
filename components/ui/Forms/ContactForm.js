import { useState } from "react";

import Button from "../Button";
import TextField from "./TextField";
import TitleH2 from "../TitleH2";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="py-[85px] flex flex-col items-center relative w-full">
      <div className="absolute top-[-14px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="35"
          viewBox="0 0 60 35"
        >
          <path
            id="Polygone_2"
            data-name="Polygone 2"
            d="M26.2,4.429a5,5,0,0,1,7.593,0L52.925,26.746A5,5,0,0,1,49.129,35H10.871a5,5,0,0,1-3.8-8.254Z"
            transform="translate(60 35) rotate(180)"
            fill="#fff"
          />
        </svg>
      </div>
      <TitleH2 title={"Demander l'étude complète"} />
      <form className="flex justify-center max-w-[1230px] w-full bg-dark-beige place-content-between gap-x-40 ">
        <div className="w-1/2">
          <TextField label={"Prénom*"} setter={setFirstName} />
          <TextField label={"Nom*"} setter={setLastName} />
          <TextField label={"Poste*"} setter={setPosition} />
          <TextField label={"Entreprise*"} setter={setCompany} />
        </div>

        <div className="w-1/2">
          <TextField label={"E-mail*"} setter={setEmail} />
          <TextField label={"Message"} setter={setMessage} />
          <input type="submit" value="Envoyer" />{" "}
        </div>
      </form>
    </div>
  );
}
