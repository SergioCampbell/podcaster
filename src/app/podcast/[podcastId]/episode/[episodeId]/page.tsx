'use client';
import { useParams } from "next/navigation";

const Episodepage = () => {
  const { episodeId } = useParams();
  return (
    <>
      <h1>Episode Page</h1>
      <p>This is the podcast id {episodeId}</p>
    </>
  );
};

export default Episodepage;
