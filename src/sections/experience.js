/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-card';

import thumb1 from 'assets/images/blog/1.png';
import thumb2 from 'assets/images/blog/2.png';
import thumb3 from 'assets/images/blog/3.png';
import thumb4 from 'assets/images/blog/4.jpg';
import thumb5 from 'assets/images/blog/5.png';

const data = [
  {
    id: 1,
    thumb: thumb5,
    commentCount: "Oct 2022",
    link: '#!',
    title: `Fullstack Developer Node.js - React.js at NeoWorlder (LootNFT)`,
  },
  {
    id: 2,
    thumb: thumb4,
    commentCount: "Feb 2022",
    link: '#!',
    title: `Fullstack Node.js - React.js Developer at Amalia.io`,
  },
  {
    id: 3,
    thumb: thumb3,
    commentCount: "Nov 2021",
    link: '#!',
    title: `Fullstack Node.js - React.js Developer at Sell-up.fr`,
  },
  {
    id: 4,
    thumb: thumb2,
    commentCount: "Feb 2021",
    link: '#!',
    title: `React.js Developer at AFI Assurance
    `,
  },
  {
    id: 5,
    thumb: thumb1,
    commentCount: "Nov 2019",
    link: '#!',
    title: `FullStack Node - React Junior Developer at MyAgency`,
  },
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      className={className}
      sx={styles.paginationButton}
    >
      {control === 'prev' ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: 'unslick',
    },
  ],
};

const Blog = () => {
  return (
    <Box id="blog" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Experiences"
          title="Recent work experience"
          description={"Throughout my career, I've worked as a dedicated web developer, harnessing the power of JavaScript/TypeScript and cutting-edge frameworks to create engaging and adaptive web solutions. Working collaboratively in interdisciplinary teams, I have translated intricate designs into seamless user experiences while maintaining an unwavering commitment to code excellence and optimal performance."}
        />
        <Slider sx={styles.blogWrapper} {...settings}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [30, 30, 6],
    pb: [50, 50, 50, 100, 8, 9],
  },
  heading: {
    mb: [30, 30, 30, 50, 60],
  },
  blogWrapper: {
    gap: 30,
    display: ['grid', 'grid', 'grid', 'block', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    m: [0, 0, 0, '0 -15px', 0],
  },
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: '-60px',
    ':focus': {
      outline: '0 none',
    },
    svg: {
      transition: 'all 0.2s ease-in-out 0s',
    },
    '&.slick-disabled': {
      color: '#BBC7D7',
      svg: {
        transform: 'scale(0.8)',
      },
    },
    '&.slick-prev': {
      left: 'calc(50% - 16px)',
      transform: 'translateX(-50%)',
    },
    '&.slick-next': {
      transform: 'translateX(50%)',
      right: 'calc(50% - 16px)',
    },
  },
};
