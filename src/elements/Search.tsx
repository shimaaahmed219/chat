import { CiSearch } from "react-icons/ci";
export default function Search() {
  return (
    <div className="w-full h-[40px] rounded-[10px]  px-2 my-5 text-white bg-secanod items-center justify-between flex">
      <CiSearch className="text-[20px] cursor-pointer  font-semibold text-gray-200" />
      <input
        type="search"
        placeholder="Search..."
        className=" focus:outline-none w-[88%] h-full bg-transparent"
      />
    </div>
  );
}
