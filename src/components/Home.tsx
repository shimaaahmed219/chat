export default function Home() {
  return (
    <div className="w-[80%] pr-10 text-white">
      <div className="w-[100%] mt-[22px] min-h-[400px] ml-10 p-5 bg-secanod rounded-[10px]">
        <div className="w-2/6 py-2 px-2 rounded-[15px] bg-main ">
          hi buddy how you doing?
        </div>
        <div className="w-2/6 py-2 my-2 px-2 ms-auto rounded-[15px] bg-user ">
          Lorem, ipsum.
        </div>
        <div className=" w-2/6 py-2 px-2  my-2 rounded-[15px] bg-main ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="w-3/6 py-2 px-2  my-2 ms-auto rounded-[15px] bg-user ">
          Lorem, ipsum dolor.
        </div>
        <div className="w-3/6 py-2 px-2  my-2 rounded-[15px] bg-main ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
        <div className="w-2/6 py-2 px-2  my-2 ms-auto rounded-[15px] bg-user ">
          hi buddy how you doing?
        </div>
        <div className="w-3/6 py-2 px-2  my-2 rounded-[15px] bg-main ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
          cupiditate sapiente? Quo molestias doloremque quae commodi recusandae
          repudiandae pariatur suscipit?
        </div>
      </div>
      <div className="w-[100%] mt-[22px] h-[40px] ml-10 bg-secanod rounded-[10px]">
        <input
          className="bg-transparent w-full h-full focus:outline-none px-5"
          placeholder="write a message.. "
        />
      </div>
    </div>
  );
}
