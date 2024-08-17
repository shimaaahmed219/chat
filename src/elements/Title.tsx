interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <div className=" text-white flex px-5 items-center">
      <h1 className=" mt-[-5px] absolute mb-3">{text}</h1>
    </div>
  );
}
