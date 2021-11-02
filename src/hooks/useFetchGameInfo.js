import { useState, useEffect } from "react";
import axios from "axios";

const useFetchGameInfo = (controller) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    axios
      .get(`http://localhost:8000/admin/game/${controller}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGames(response.data);
        setLoading(false);
      });
    return () => {
      setGames([]);
    };
  }, [controller]);

  return [games, loading];
};

export default useFetchGameInfo;
