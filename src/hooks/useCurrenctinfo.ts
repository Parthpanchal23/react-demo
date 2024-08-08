import { useEffect, useState } from "react";

function useCurrecyInfo(currencys: any) {
  const [data, setData] = useState({});
  let currency = "inr";
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    return () => {};
  }, [currency]);
  console.log("data", data);
  return data;
}

export default useCurrecyInfo;

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json
