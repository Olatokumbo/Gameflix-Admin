import { useState, useEffect } from "react";
import axios from "axios";

const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let token = localStorage.getItem("token");
    token = JSON.parse(token);

    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/game/list`, {
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
  }, []);

  return [games, loading];
};

export default useFetchGames;
