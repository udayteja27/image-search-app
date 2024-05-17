import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";
import "./styles.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: searchTerm },
          headers: {
            Authorization:
              "Client-ID _Azg1QdBDx11aVz9FDK-mO4DeBYHeUFoiAFDMAhPOa4",
          },
        }
      );
      setImages(response.data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>Image-Search App</h1>
      <SearchBar onSearch={fetchImages} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <ImageGrid images={images} />
      )}
    </div>
  );
};

export default App;
