import { useState } from 'react';
import Hero from './components/Hero/Hero';
import HighlightsSection from './components/HighlightsSection';
import StoryModal, { StoryGroup } from './components/StoryModal';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const storyGroups: StoryGroup[] = [
  {
    id: 'reviews',
    title: 'آراء',
    slides: [
      { image: '/rev1.webp' },
      { image: '/rev2.webp' },
      { image: '/rev3.webp' },
      { image: '/rev4.webp' },
      { image: '/rev5.webp' },
      { image: '/rev6.webp' },
      { image: '/rev7.webp' },
      { image: '/rev8.webp' },
      { image: '/rev9.webp' },
      { image: '/rev10.webp' },
      { image: '/rev11.webp' },
      { image: '/rev12.webp' },
    ],
  },
  {
    id: 'info',
    title: 'معلومات عنا',
    slides: [
      { image: '/orziinfo.jpg' },
    ],
  },
  {
    id: 'upcoming',
    title: 'إصدارات قادمة',
    slides: [
      { image: '/pants.jpg' },
      { image: '/watch.jpg' },
      { image: '/shoes.jpg' },
    ],
  },
];

function App() {
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const handleStoryOpen = (storyId: string) => {
    const idx = storyGroups.findIndex((s) => s.id === storyId);
    if (idx >= 0) {
      setActiveStoryIndex(idx);
      setStoryModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#e7ddcc]" dir="ltr">
      <main>
        <Hero />

        <div id="highlights">
          <HighlightsSection onStoryOpen={handleStoryOpen} />
        </div>
      </main>

      <Footer />

      <StoryModal
        stories={storyGroups}
        initialStoryIndex={activeStoryIndex}
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
      />

      <WhatsAppButton />
    </div>
  );
}

export default App;
