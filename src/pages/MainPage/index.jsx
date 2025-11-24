import Banner from "@/components/banner/Banner";
import PopularMovies from "@/components/popular-movie/PopularMovie";
import TopRankedMovie from "@/components/top-ranked-movie/TopRankedMovie";

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
