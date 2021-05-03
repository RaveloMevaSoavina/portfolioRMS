/** @jsx jsx */
import {useState , useEffect} from 'react';
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';

import gallery1 from 'assets/images/gallery/1.png';
import gallery2 from 'assets/images/gallery/2.png';
import gallery3 from 'assets/images/gallery/3.png';
import gallery4 from 'assets/images/gallery/4.png';
import gallery5 from 'assets/images/gallery/5.png';
import gallery6 from 'assets/images/gallery/6.png';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'DevTube (youtube clone)',
  },
  {
    id: 2,
    image: gallery2,
    title: 'Linked\'ev (linked\in clone)',
  },
  {
    id: 3,
    image: gallery3,
    title: 'Devzon (amazon clone)',
  },
  {
    id: 4,
    image: gallery4,
    title: 'CampusDev (campusfrance clone)',
  },
  {
    id: 6,
    image: gallery6,
    title: 'PortalDev (portalJob clone)',
  },
  {
    id: 5,
    image: gallery5,
    title: 'Devllo (trello clone)',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {

  const [timeout, settimeout] = useState(false); // debug gallery project bug mansory timeout

  useEffect(() => {
      setTimeout(() => {
        settimeout(true)
      }, 100);
  },[])

  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Projets personnels"
          title="Decouvrons ensemble mes projets personnels"
        />
        {timeout && <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>}
        <Button variant="muted" sx={styles.button}>
          Voir plus de projets <RiArrowRightSLine size="20px" />
        </Button>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
