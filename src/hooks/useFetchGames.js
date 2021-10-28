import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("Loading...");
    axios
      .get(`http://localhost:8000/admin/game/list`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE3MWM5YWVlZGM1MDdmMTc5YTdkMzExIiwidXNlcm5hbWUiOiJkYXZpZDAiLCJpYXQiOjE2MzU0MzQ2MTZ9.R4Q-ABFUfud1qT9nSV2x00HoqBKGn15Qjw7gtW-CDUI",
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
