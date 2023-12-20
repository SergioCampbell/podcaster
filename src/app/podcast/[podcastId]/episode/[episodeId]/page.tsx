'use client';
import { useParams } from "next/navigation";
import { podcastDetail } from "../../../../../../db/data";

const Episodepage = () => {
  const { episodeId } = useParams();
  const { results, resultCount } = podcastDetail;
  return (
    <>
      <h1>Episode Page</h1>
      <p>This is the podcast id {episodeId}</p>
    </>
  );
};

export default Episodepage;
