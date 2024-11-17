import { useNavigate } from 'react-router-dom';

export default function Header() {
  const barStyle =
    "w-auto text-sm text-gray-100 p-2 font-bold hover:text-amber-900";

  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-center bg-amber-600 gap-10 mb-3">
      <button className={barStyle} onClick={()=>navigate('/')}>레시피 모음</button>
      <button className={barStyle} onClick={()=>navigate('/recent')}>최근 조회</button>
      <button className={barStyle} onClick={()=>navigate('/rank')}>순위</button>
      <button className={barStyle}>검색</button>
    </div>
  );
}
