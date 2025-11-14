import React from "react";
import { fetchSimilarMovies } from "@/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersectionObserver } from "@/hooks";
import { MovieGrid, Typography } from "@/components";
import { Loading, Divider } from "./style";

const ITEMS_PER_PAGE = 18;

const SimilarMovies = ({ movieId }) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["similarMovies", movieId],
    queryFn: ({ pageParam = 1 }) => fetchSimilarMovies({ movieId, pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage <= lastPage.totalPages
        ? lastPage.nextPage
        : undefined;
    },
    enabled: !!movieId,
  });

  const observerTarget = useIntersectionObserver({
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    enabled: hasNextPage,
  });

  if (isLoading) return <Loading>로딩 중...</Loading>;
  if (isError) return <Typography>유사 영화를 불러올 수 없습니다.</Typography>;

  const movies =
    data?.pages
      .flatMap((page) => page.results.slice(0, ITEMS_PER_PAGE))
      .filter((movie) => movie.poster_path) || [];

  if (movies.length === 0) {
    return <Typography>유사한 영화가 없습니다.</Typography>;
  }

  return (
    <>
      <Divider />
      <MovieGrid movies={movies} title="비슷한 영화" padding="20px 80px" />

      <div ref={observerTarget} style={{ height: "20px" }} />
      {isFetchingNextPage && <Loading>더 불러오는 중...</Loading>}
    </>
  );
};

export default SimilarMovies;
