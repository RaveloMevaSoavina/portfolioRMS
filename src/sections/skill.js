/** @jsx jsx */
import { jsx, Box, Button, Container, Image } from 'theme-ui';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { RiArrowRightSLine } from 'react-icons/ri';
import Slider from 'react-slick';
import SectionHeading from 'components/section-heading';
import nest from 'assets/images/clients/info/Nestjs.png';
import react from 'assets/images/clients/info/react.png';
import next from 'assets/images/clients/info/nextjs.png';
import nodejs from 'assets/images/clients/info/nodejs.png';
import mongodb from 'assets/images/clients/info/mongodb.png';
import mysql from 'assets/images/clients/info/mysql.png';
import tailwind from 'assets/images/clients/info/tailwind.png';
import bootstrap from 'assets/images/clients/info/bootstrap.png';
import redux from 'assets/images/clients/info/redux.png';
import graphql from 'assets/images/clients/info/graphql.png';


import arduino from 'assets/images/clients/electronic/arduino.png';
import pic from 'assets/images/clients/electronic/pic.png';
const monCvLink = "https://drive.google.com/file/d/1nIzFRCRXOCU7ouRcV73FCbjG-Zcvzpfq/view?usp=sharing"

const info = [
  {
    id: 2,
    name: 'React',
    logo: react,
  },
  {
    id: 4,
    name: 'NodejS',
    logo: nodejs,
  },
  {
    id: 3,
    name: 'Nestjs',
    logo: nest,
  },
  {
    id: 1,
    name: 'Nextjs',
    logo: next,
  },
  {
    id: 8,
    name: 'Redux',
    logo: redux,
  },
  {
    id: 6,
    name: 'Tailwind',
    logo: tailwind,
  },
  {
    id: 7,
    name: 'Bootstrap',
    logo: bootstrap,
  },
  {
    id: 8,
    name: 'Redux',
    logo: redux,
  },
  {
    id: 9,
    name: 'GraphQL',
    logo: graphql,
  },
  {
    id: 5,
    name: 'Mongodb',
    logo: mongodb,
  },
];

const electronics = [
  {
    id: 1,
    name: 'Arduino',
    logo: arduino,
  },
  {
    id: 2,
    name: 'Pic',
    logo: pic,
  }
]

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      className={className}
      sx={styles.paginationButton}
      onClick={onClick}
    >
      {control === 'prev' ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const Clients = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SlickArrow control="next" />,
    prevArrow: <SlickArrow control="prev" />,
    responsive: [
      {
        breakpoint: 100000,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="clients" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="My skills"
          title="My skills as fullstack web developer"
          description={"Proficient across the JavaScript ecosystem, both in frontend and backend development, I specialize in creating dynamic web applications. My skillset encompasses a range of frameworks including Reactjs, Nextjs, Nodejs, Nestjs, and Express, allowing me to build seamless user interfaces and robust server-side functionalities."}
        />
        <Slider sx={styles.clients} {...settings}>
          {info?.map((client) => (
            <Box key={client.id} as="figure" sx={styles.logo}>
              <Image loading="lazy" src={client.logo} alt={client.name} sx={{ marginRight: 40 }} />
            </Box>
          ))}
        </Slider>
        <Button variant="muted" sx={styles.button}>
          <a sx={styles.link} href={monCvLink} target='_blank' rel='noopener noreferrer'>
            Download my resume for more details
          </a>
        </Button>
      </Container>
    </Box>
  );
};

export default Clients;

const styles = {
  link: {
    textDecoration: 'none',
    color: '#444',
    ':hover': {
      color: '#FFF'
    },
  },
  section: {
    pt: [50, 50, 50, 70, 60, 80],
    pb: [30, 40, 50, 60, 50, 80],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    pt: [0, 0, 25, 25, 25, 6],
    '&.slick-slider': {
      marginBottom: '40px',
    },
    '.slick-track': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  logo: {
    display: 'flex !important',
    justifyContent: 'center',
    mx: '20px',
    ':focus': {
      outline: 'none',
    },
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
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
  button: {
    marginTop: '2rem',
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
