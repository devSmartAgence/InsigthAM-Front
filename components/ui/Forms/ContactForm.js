import { useState } from "react";
import TextField from "./TextField";
import TextArea from "./TextArea";
import TitleH2 from "../TitleH2";
import axios from "axios";
import Selector from "./Selector";

export default function ContactForm({ title }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formData = {
    data: {
      subject: `Nouvelle demande d'étude`,
      email: email,
      message: message,
      firstName: firstName,
      lastName: lastName,
      position: position,
      company: company,
      // html: `<p>${message}<p>`,
    },
  };

  const emailData = {
    from: process.env.INSIGHT_ADMIN_EMAIL,
    to: email,
    replyTo: process.env.INSIGHT_ADMIN_EMAIL,
    subject: "Nouvelle demande d'étude",
    html: `<p>{${message}</p>`,
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   try {
  //     axios.post(`http://localhost:1337/api/forms`, formData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      try {
        const response = axios.post(
          `${process.env.NEXT_PUBLIC_DB_HOST}/api/forms`,
          formData
        );
        console.log(response, "Form sent");
        /// If form submit OK, then send email
        try {
          const response = axios.post(
            `${process.env.NEXT_PUBLIC_DB_HOST}/api/email`,
            emailData
          );
          console.log(response, "E-mail sent");
          setIsLoading(false);
          setIsConfirmed(true);
          setIsConfirmationVisible(true);
        } catch (error) {
          console.log(error, "An error occured, e-mail not sent");
          setIsLoading(false);
          setIsConfirmed(false);
          setIsConfirmationVisible(true);
        }
      } catch (error) {
        setIsLoading(false);
        setIsConfirmed(false);
        setIsConfirmationVisible(true);
        console.log("An error occured, something went wrong");
      }
    }
  };
  ////////

  return (
    <div className="py-[85px] flex flex-col items-center relative w-full bg-dark-beige">
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
      <TitleH2 title={title} />
      <div className="flex flex-col w-full items-center">
        <p className="font-serif text-deep-blue text-[14px] mb-[30px] mt-[30px] max-w-[1230px] w-[80%] md:w-full">
          * Tous les champs précédés d’une astérisque sont obligatoires.
        </p>
        <form
          className="flex-row justify-center w-[80%] place-content-between gap-x-[12%] md:flex md:w-full md:max-w-[1230px]  "
          onSubmit={handleSubmit}
          id="form"
        >
          <div className="md:w-1/2">
            <TextField
              label={"Prénom*"}
              setter={setFirstName}
              type="text"
              required={true}
            />
            <TextField
              label={"Nom*"}
              setter={setLastName}
              type="text"
              required={true}
            />
            <TextField
              label={"Poste*"}
              setter={setPosition}
              type="text"
              required={true}
            />
            <TextField
              label={"Entreprise*"}
              setter={setCompany}
              type="text"
              required={true}
            />
          </div>

          <div className="md:w-1/2">
            <TextField
              label={"E-mail*"}
              setter={setEmail}
              required={true}
              name="email"
              type="email"
            />
            <Selector label={"Sujet de votre demande"} setter={setSubject} />

            <TextArea
              label={"Message"}
              setter={setMessage}
              name="message"
              required={false}
              type="text"
            />

            {!isLoading ? (
              <div className="w-full flex-row mt-[30px] items-center md:flex">
                <input
                  type="submit"
                  value="Envoyer"
                  className="w-full border-deep-blue bg-deep-blue uppercase border-[1px] px-[35px] h-[50px] text-[12px] text-white rounded-full hover:bg-white hover:text-deep-blue transition-colors duration-300 focus:shadow-outline cursor-pointer md:w-auto"
                />
                {isConfirmationVisible && (
                  <p
                    className={`font text-[12px] text-${
                      isConfirmed ? "msg-confirm" : "msg-err"
                    } px-[10px] mt-[15px] text-center md:text-left md:mt-0`}
                  >
                    {isConfirmed
                      ? `Votre message a bien été envoyé, vous allez recevoir un e-mail de confirmation à l'adresse renseignée.`
                      : `Une erreur est survenue, si le problème persiste, veuillez écrire directement à contact@insigtham.com`}
                  </p>
                )}
              </div>
            ) : (
              <div className="w-full flex-row mt-[30px] items-center md:flex">
                <div className="relative">
                  <div className="absolute left-[40%] top-[20%] animate-spin">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31.041"
                      height="31.041"
                      viewBox="0 0 31.041 31.041"
                    >
                      <path
                        id="noun-preloader-1274157-FF4E32"
                        d="M136.212,124.836A11.616,11.616,0,0,0,124.84,136.2a13.572,13.572,0,0,0,.118,1.619c.212,1.388.965,1.714,1.589,1.658a1.119,1.119,0,0,0,.79-.415,1.241,1.241,0,0,0,.217-1.007c-.015-.064-.02-.136-.03-.2a8.711,8.711,0,0,1-.178-1.658,8.842,8.842,0,1,1,5.765,8.292,1.259,1.259,0,1,0-1,2.31,10.272,10.272,0,0,0,4.1.76A11.348,11.348,0,0,0,147.564,136.2a11.723,11.723,0,0,0-11.352-11.362Z"
                        transform="translate(65.371 -170.533) rotate(60)"
                        fill="#fff"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>

                  <input
                    type="submit"
                    value="Envoyer"
                    className="w-full border-deep-blue bg-deep-blue uppercase border-[1px] px-[35px] h-[50px] text-[12px] text-deep-blue rounded-full md:w-fit"
                  />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
