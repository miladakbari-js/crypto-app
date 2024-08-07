import { useEffect } from "react";
import TableCoins from "../modules/TableCoins";
import { useState } from "react";

function HomePage() {
  const [coins , setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1"
    )
      .then((res) => res.json())
      .then((res) => setCoins(res));
  }, []);
  
  return <div>
    <TableCoins coins={coins}/>
  </div>;
}

export default HomePage;
