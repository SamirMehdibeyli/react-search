import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID sYPIMbs0gMMJyqwR42m1ytScMNvOZpojwul1CSpUPNk",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
