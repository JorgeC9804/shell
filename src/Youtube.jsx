import React from "react";
import axios from "axios";

const Youtube = () => {
  const handleResponseApi = () => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/video",
      params: { id: "dQw4w9WgXcQ" },
      headers: {
        "X-RapidAPI-Key": "f645211e66msh5dd431b9a2392d0p1c2727jsn525045df5224",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleResponseApi}>get response</button>
    </div>
  );
};

export default Youtube;
