import "./App.css";

const Laptops = ({ laptops }) => {
  const laptopListing = laptops.map((laptop) => (
    <div>
      <h3>{laptop.brand}</h3>
      <p>Price: ${laptop.price}</p>
    </div>
  ));

  return (
    <>
      <h2>Laptops</h2>
      {laptopListing}
    </>
  );
};

const TouristSpots = ({ touristSpots }) => {
  const spotListing = touristSpots.map((spots) => (
    <div>
      <h3>{spots.name}</h3>
      <p>
        Location: {spots.location.city}, {spots.location.country}
      </p>
    </div>
  ));

  return (
    <>
      <h2>Tourist Spots</h2>
      {spotListing}
    </>
  );
};

const PodcastEpisodes = ({ podcastEpisodes }) => {
  const episodeListing = podcastEpisodes.map((episode) => (
    <div>
      <h3>{episode.title}</h3>
      <p>Duration: {episode.duration} minutes</p>
    </div>
  ));

  return (
    <>
      <h2>Podcast Episodes </h2>
      {episodeListing}
    </>
  );
};

const NewsArticles = ({ newsArticles }) => {
  const articleListing = newsArticles.map((article) => (
    <div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </div>
  ));
  return (
    <>
      <h2>News Articles</h2>
      {articleListing}
    </>
  );
};

const Games = ({ games }) => {
  const gameListing = games.map((game) => (
    <div>
      <h3>{game.name}</h3>
      <p>Genre: {game.genre}</p>
    </div>
  ));

  return (
    <>
      <h2>Games</h2>
      {gameListing}
    </>
  );
};

export default function App() {
  const laptops = [
    { id: 1, brand: "Dell", price: 999 },
    { id: 2, brand: "HP", price: 899 },
    { id: 3, brand: "Lenovo", price: 1099 },
  ];

  const touristSpots = [
    {
      id: 1,
      name: "Grand Canyon",
      location: {
        city: "Arizona",
        country: "USA",
      },
    },
    {
      id: 2,
      name: "Eiffel Tower",
      location: {
        city: "Paris",
        country: "France",
      },
    },
    {
      id: 3,
      name: "Great Wall of China",
      location: {
        city: "Beijing",
        country: "China",
      },
    },
  ];

  const podcastEpisodes = [
    { id: 1, title: "Episode 1", duration: 30 },
    { id: 2, title: "Episode 2", duration: 45 },
    { id: 3, title: "Episode 3", duration: 60 },
  ];

  const newsArticles = [
    { id: 1, title: "News 1", description: "Description 1" },
    { id: 2, title: "News 2", description: "Description 2" },
    { id: 3, title: "News 3", description: "Description 3" },
  ];

  const games = [
    { id: 1, name: "Game 1", genre: "Action" },
    { id: 2, name: "Game 2", genre: "Adventure" },
    { id: 3, name: "Game 3", genre: "Strategy" },
  ];
  return (
    <main>
      <Laptops laptops={laptops} />
      <hr />
      <TouristSpots touristSpots={touristSpots} />
      <hr />
      <PodcastEpisodes podcastEpisodes={podcastEpisodes} />
      <hr />
      <NewsArticles newsArticles={newsArticles} />
      <hr />
      <Games games={games} />
    </main>
  );
}
