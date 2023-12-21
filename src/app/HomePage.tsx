import Loading from "@/components/Loading";
import { Filter } from "@/components/Podcast/Filter";
import { PodcastCards } from "@/components/Podcast/PodcastCards";
import { Navbar } from "@/components/navbar";
import { usePodcast } from "@/hooks";
import { AllPodcasts, Podcasts } from "@/interface/podcasts";
import { Container, Stack, Typography } from "@mui/material";
import { Suspense, useEffect, useState } from "react";

export const HomePage = () => {
  const { data, isFetching, isLoading: loading } = usePodcast(6);
  const [podcasts, setPodcasts] = useState<AllPodcasts>([]);
  const [totalPodcasts, setTotalPodcasts] = useState(0);
  const [isLoading, setIsloading] = useState(loading);
  const [searchQueary, setSearchQueary] = useState<string>("");

  /**
   * Filtering data with search queary and search queary in lower and upper case
   */
  const dataFiltered = podcasts?.filter((podcast: Podcasts) => {
    return (
      podcast?.["im:name"]?.label?.toLowerCase().includes(searchQueary) ||
      podcast?.["im:name"]?.label
        ?.toUpperCase()
        .includes(searchQueary.toUpperCase()) ||
      podcast?.["im:artist"]?.label?.toLowerCase().includes(searchQueary) ||
      podcast?.["im:artist"]?.label
        ?.toUpperCase()
        .includes(searchQueary.toUpperCase()) ||
      "".toLowerCase().includes(searchQueary.toLowerCase())
    );
  });

  useEffect(() => {
    data !== undefined && setPodcasts(data);
    setTotalPodcasts(data?.length || 0);
    setIsloading(!data);
    setSearchQueary(searchQueary);
  }, [data, searchQueary]);
  return (
    <main>
      <Navbar isloading={isLoading} />
      <Suspense fallback={<Loading />}>
        <Filter
          totalPodcasts={totalPodcasts}
          searchQueary={searchQueary}
          setSearchQueary={setSearchQueary}
        />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Container maxWidth="xl" sx={{ mt: 5 }}>
          <Stack
            direction="row"
            alignItems={"stretch"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            {dataFiltered !== undefined && dataFiltered?.length > 0 ? (
              <PodcastCards allPodcast={dataFiltered} loading={isLoading} />
            ) : (
              <Stack alignItems={"center"}>
                {isFetching ? (
                  <Loading />
                ) : (
                  <Typography variant="h4">No Podcast Found</Typography>
                )}
              </Stack>
            )}
          </Stack>
        </Container>
      </Suspense>
    </main>
  );
};
