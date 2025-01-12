import { useNavigate } from "react-router-dom";

export default function HomeImage({ mainImage }) {
  const homeNavigate = useNavigate();

  return (
    <div className="w-52 h-full mx-auto hover:cursor-pointer">
      <img
        src={mainImage}
        alt="mainImage"
        className="rounded-3xl object-contain"
        onClick={() => homeNavigate("/")}
      />
    </div>
  );
}
