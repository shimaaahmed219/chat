import { Link } from "react-router-dom";

export default function Status() {
  return (
    <div className="w-full h-[40px] flex justify-center text-[15px] items-center rounded-[10px] text-white bg-secanod ">
      <div className="flex w-[20%] justify-between me-auto  font-thin px-3 border-r-[3px] border-main ">
        <Link to="">public message</Link>
        <Link className="opacity-50" to="">
          private message{" "}
        </Link>
      </div>
      <div className="w-[80%] flex items-center justify-start px-5">
        <h6 className="opacity-50"> your status :</h6>
        <p className="capitalize mx-2">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
          ab&#128117;
        </p>
      </div>
    </div>
  );
}
