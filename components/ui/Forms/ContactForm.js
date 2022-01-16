import Button from "../Button";
import TextField from "./TextField";

export default function ContactForm() {
  return (
    <form className="flex justify-center max-w-[1230px] w-full bg-dark-beige place-content-between ">
      <div className="w-1/2">
        <TextField />
        <TextField />
      </div>

      <div className="w-1/2">
        <TextField />

        <TextField />
        <Button label={"envoyer"} aspect={"dark"} />
      </div>
    </form>
  );
}
