/** @jsx jsx */
import {useState , useEffect} from 'react';
import { useRouter } from 'next/router'
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

const loadingData =[
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
]

const masonryOptions = {
  transitionDuration: 0.5,
};

const Gallery = ({ posts , lookAt}) => {

  // console.log(posts , "projects")

  const router = useRouter()
  const [load , setLoad] = useState(false)

  // const handlePushPage = (idProject) => router.push(`/projects/${idProject}`)
  const handlePushPage = (idProject) => lookAt(idProject);

  useEffect(() => {
    data.push(...loadingData);
  },[load])

  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Projets personnels"
          title="Decouvrons ensemble mes projets personnels"
        />
        {/* <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}> */}
        <Box sx={styles.galleryWrapper}>
          {posts?.map((item) => (
            <GalleryCard key={item.id} item={item} push={handlePushPage}/>
          ))}
        </Box>
        {/* <Button variant="muted" sx={styles.button} onClick={() => router.push('/projects')}> */}
        <Button variant="muted" sx={styles.button} onClick={()=>setLoad(true)}>
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
    display: 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap'
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
