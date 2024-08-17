import { Link } from "react-router-dom";


export default function User() {
  return (
    <>
     <div className="w-full h-full  text-gray-300 flex px-2  flex-col my-4">
      <div className="flex  justify-between ">
        <div className="w-[30px] mt-2 rounded-full h-[30px] bg-gray-400">
          {/* <img src="" />  */}
        </div>
        <div className="flex w-full justify-between h-full">
          <Link to="/user2" className="text-[15px]  capitalize ml-5">Dina mohamed</Link>
          <div className="text-[10px] ms-auto">11:22</div>
        </div>
      </div>
      <p className="ml-[45px] font-thin text-[12px] mt-[-15px]">
        Lorem ipsum dolor{" "}
      </p>
      <hr className="w-full h-[2px] my-2 bg-main border-none" />
      <div className="flex  justify-between ">
        <div className="w-[30px] mt-2 rounded-full h-[30px] bg-gray-400">
          {/* <img src="" />  */}
        </div>
        <div className="flex w-full justify-between h-full">
          <Link to="/" className="text-[15px]  capitalize ml-5">shimaa ahmed</Link>
          <div className="text-[10px] ms-auto">11:22</div>
        </div>
      </div>
      <p className="ml-[45px] font-thin text-[12px] mt-[-15px]">
        Lorem ipsum dolor{" "}
      </p>
      <hr className="w-full h-[2px] my-2 bg-main border-none" />
    </div>
    
    
    </>
   
  );
}
