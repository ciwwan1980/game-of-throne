import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [houseList, setHouseList] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        let array = [];
        data.forEach((item) => {
          let id = item.url.split("/").pop();
          array.push({ id, ...item });
        });
        setIsPending(false);
        setHouseList(array);
        setError(null);
      }).catch((err) => {
        setIsPending(false);
        setError(err.message);
      });

      
  }, [url]);

  return { houseList, isPending, error };
};

export default useFetch;
