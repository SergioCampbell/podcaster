'use client';
import { Sidebar } from '@/components/Sidebar';
import { useParams } from 'next/navigation';
import React from 'react'
import { podcastDetail } from '../../../../db/data';
import { Navbar } from '@/components/navbar';
import { PodcastTable } from '@/components/Podcast/PodcastTable';

const PodcastPage = () => {
    const { podcastId } = useParams();
    const sidePodcast = podcastDetail.results;
    console.log("🚀 ~ file: page.tsx:13 ~ PodcastPage ~ onePodcast:", sidePodcast);

  return (
    <div>
        <Navbar />
        <Sidebar resultCount={0} results={sidePodcast}/>
        <h1>{podcastId}</h1>
        <hr />
        <PodcastTable data={podcastDetail.results} />
    </div>
  )
}

export default PodcastPage;
