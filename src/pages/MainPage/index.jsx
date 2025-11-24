import { Banner, PopularMovies, TopRankedMovie } from "@/components";

const MainPage = () => {
  return (
    <main>
      <Banner />
      <TopRankedMovie />
      <PopularMovies />
    </main>
  );
};

export default MainPage;
