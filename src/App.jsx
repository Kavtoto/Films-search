import { useState } from "react";
import SearchBar from "./Components/Searchbar";
import SearchResults from "./Components/SearchResults";

function App() {
  const [films, setFilms] = useState(null);
  const [filmName, setFilmName] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const handleChange = (event) => setFilmName(event.target.value)

  function onSearch() {
    if (!filmName.trim()) return;
    setLoading(true);
    setNotFound(false);
    setFilms(null);

    fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${filmName}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.description && data.description.length > 0) {
          setFilms(data);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => {
        setNotFound(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <SearchBar onSearch={onSearch} filmName={filmName} handleChange={handleChange} />
      <SearchResults films={films} loading={loading} notFound={notFound} />
    </>
  );
}

export default App;
