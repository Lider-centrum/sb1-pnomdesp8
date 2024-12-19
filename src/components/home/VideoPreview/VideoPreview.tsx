import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import VideoPlayer from './VideoPlayer';

const VideoPreview = () => {
  return (
    <section className="py-24 bg-white">
      <Container className="px-6 lg:px-8">
        <SectionHeader
          title="Zobacz przykładową lekcję"
          description="Przekonaj się, jak wyglądają nasze materiały. Obejrzyj fragment jednego z kursów."
          className="mb-12"
        />
        <VideoPlayer videoId="398935792" />
      </Container>
    </section>
  );
};

export default VideoPreview;