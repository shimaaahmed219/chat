import Logo from "../elements/Logo";
import { SlOptions } from "react-icons/sl";

export default function Header() {
  return (
    <div className=" w-full h-full flex justify-between ">
      <Logo />
      <SlOptions className="text-white m-5 cursor-pointer" />
    </div>
  );
}
