import { useNavigate } from "react-router-dom";
import searchImage from "../assets/search_magnifier_icon.png";
import { useState } from "react";

export default function Header() {
  const barStyle =
    "w-auto text-sm text-gray-100 p-2 font-bold hover:text-amber-900";
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  function handleSearch(){
    if(query.trim() !== ''){
      navigate(`/search?query=${encodeURIComponent(query)}`)
    }
  }

  return (
    <div className="flex flex-row justify-center bg-amber-600 gap-10 mb-3">
      <button className={barStyle} onClick={() => navigate("/")}>
        레시피 모음
      </button>
      <button className={barStyle} onClick={() => navigate("/recent")}>
        최근 조회
      </button>
      <button className={barStyle} onClick={() => navigate("/rank")}>
        순위
      </button>
      {/* <button className={barStyle}>검색</button> */}
      <div className="flex">
        <input
          placeholder="검색어를 입력하세요"
          onChange={(event)=>setQuery(event.target.value)}
          value={query}
          className="w-48 pl-1 bg-amber-600 border-amber-700 border-2 my-1 mr-1 focus:border-amber-900 focus:outline-none placeholder-gray-200 placeholder:text-sm text-gray-100"
        ></input>
        <img
          src={searchImage}
          className="w-7 h-7 my-auto hover:cursor-pointer"
          onClick={handleSearch}
        ></img>
      </div>
    </div>
  );
}
