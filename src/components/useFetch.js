import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [houseList, setHouseList] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let array = [];
        data.forEach((item) => {
          let id = item.url.split("/").pop();
          array.push({ id, ...item });
        });
        setIsPending(false);
        setHouseList(array);
      });
  }, [url]);

  return { houseList, isPending };
};

export default useFetch;
