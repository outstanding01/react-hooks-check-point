import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetailPage from './components/MovieDetailPage';

function App() {
  const [movies, setMovies] = useState([
    {title: "Emancipation", description: "Emancipation is a 2022 action-thriller movie directed by Antoine Fuqua and starring Will Smith in the lead role. The movie is set in Louisiana in the year 1863, during the Civil War. It tells the story of Peter, a slave who manages to escape from his plantation and sets out on a dangerous journey towards freedom. Peter is a skilled blacksmith who works on a plantation owned by John Carruthers, a cruel and sadistic master.", posterURL: "https://cfm.yidio.com/images/movie/239131/poster-193x290.jpg", rating: "8/10"},
   {title: "Five Nights at Freddy's", description: "A troubled security guard begins working at Freddy Fazbear's Pizza. During his first night on the job, he realizes that the night shift won't be so easy to get through. Pretty soon he will unveil what actually happened at Freddy's.", posterURL: "https://cfm.yidio.com/images/movie/245028/poster-180x270.jpg", rating: "7/10"},
   {title: "Palmer", description: "Palmer is a heartwarming drama film released in 2021, starring Justin Timberlake, Juno Temple, and Alisha Wainwright, directed by Fisher Stevens. The film tells the story of Eddie Palmer (Timberlake), a former high school football star and convict who returns to his hometown after spending 12 years in prison. He moves in with his grandmother, Vivian (June Squibb), and tries to piece his life back together.", posterURL: "https://cfm.yidio.com/images/movie/227271/poster-180x270.jpg", rating: "7/10"},
  {title: "Ghosted", description: "The movie Ghosted is a romantic comedy that follows the story of two strangers, Sadie Rhodes and Cole Turner, who meet by chance. Sadie is grieving the death of her co-worker and decides to drive to the mountains to process her emotions. On the other hand, Cole works at a farmer's market and is heartbroken after being dumped by his ex-girlfriend. When Sadie meets Cole at the market to buy a plant," , posterURL: "https://cfm.yidio.com/images/movie/240599/poster-193x290.jpg", rating: "6/10"},
 {title: "The Banker", description: "The Banker is a 2020 movie directed by George Nolfi, which features Anthony Mackie, Samuel L. Jackson, and Nicholas Hoult as the lead characters. This movie is based on a true story inspired by the lives of Bernard Garrett (Anthony Mackie) and Joe Morris (Samuel L. Jackson), two African American entrepreneurs who hired Matt Steiner (Nicholas Hoult), a white man, to serve as their front in a segregated America.", posterURL: "https://cfm.yidio.com/images/movie/217153/poster-180x270.jpg", rating: "7/10"},
 {title: "CODA", description: "Coda is a heartwarming movie about a young girl named Ruby who has a passion for music. Ruby, played by Emilia Jones, lives in a family of fishermen in Massachusetts and spends most of her days assisting her family and attending school. However, her true passion lies in singing and playing the guitar, which her family isn't supportive of. The reason is her entire family is deaf except her.After joining her high", posterURL: "https://cfm.yidio.com/images/movie/230487/poster-180x270.jpg", rating: "8/10"}
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const handleFilterChange = (type, value) => {
    setFilter({ ...filter, [type]: value });
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating.toLowerCase().includes(filter.rating.toLowerCase())
    );
  });

  return (
    <>
      <Router>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<div><Filter onFilterChange={handleFilterChange} /><MovieList movies={filteredMovies} /></div>} />

          {/* Movie Detail Page */}
          <Route path="/movie/:title" element={<MovieDetailPage movies={movies} />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;











