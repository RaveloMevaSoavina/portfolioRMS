/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button , Link } from 'theme-ui';
import { rgba } from 'polished';
import Select from 'components/select';
import bannerBg from 'assets/images/banner-bg.jpg';
import mapMarker from 'assets/images/icons/map-marker.png';
import { BsTextCenter } from 'react-icons/bs';


export default function Banner() {

  const monCvLink = "https://drive.google.com/file/d/1gZYubeRiYkaaWTfUrP7Gzk-YgJuSfOeU/view?usp=sharing"

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting...');
  };

  const handleGoToGithub = (e, where) => {
    window.open(where, "_blank");
  }

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1" sx={styles.heroTitle}>
              MEVA SOAVINA RAVELO
            </Heading>
            <Heading as="h3" sx={styles.secondaryTitle}>
              - Fullstack React-Node developer -
            </Heading>
            <Box>
              <Button type="submit" sx={styles.button} variant="primary" >
                  <Link href="https://github.com/RaveloMevaSoavina" target='_blank' sx={styles.link}>
                    Visit my Github profile 
                  </Link>
              </Button>
              <Button type="submit" sx={styles.button} variant="primary">
                <a  sx={styles.link} href={monCvLink} target='_blank' rel='noopener noreferrer'>
                  Download my Resume
                </a> 
                
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ['cover', null, null, null, 'cover'],
    opacity : 0.9
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: ['20vh', '20vh', null, null, '70vh', '85vh'],
  },
  bannerContent: {
    textAlign: 'center',
    maxWidth: ['100vw', null, null, 600, 600, '100vw', '100vw'],
    maxHeight: ['100vh', '100vh', '100vh', 600, 500, '400px', '90vh'],

    padding: [
      '50px 40px 50px',
      '50px 40px 50px',
      '60px 40px 60px',
      '60px 40px 60px',
      '60px 40px 60px',
      '60px 50px 60px',
      '50px 60px 90px',
    ],
    borderRadius: '100%',
    m: ['200px 0', '200px auto', '60px auto', '110px auto', '60px auto', '200px auto 0 auto', '200px auto 0 auto'],

    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 50px 65px',
    },
  },
  heroTitle: {
    fontSize: [22, 30, 28, 35, '40px', '60px', '60px'],
    fontWeight: 800,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, null],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 35,
    },
  },
  secondaryTitle : {
    fontSize: [22, 24, 28, '20px', '25px', '30px', '30px'],
    mb : '20px',
    fontStyle : 'normal',
    color : '#8D448B',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, null],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 35,
    },
  },
  desc: {
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, 1.53, 1.53, 2, 2.4, 2, 2.48],
    maxWidth: 440,
    m: ['110px 0 0', null, '10px auto 0', '50px auto 0', '60px 0 0', null, 'auto'],
    marginTop: [15, 15, 15, 15, 15, 25, 25],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      mt: 15,
    },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: ['auto', 'auto', 'initial'],
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
  link: {
    fontSize: 20,
    fontWeight: 700,
    textDecoration : 'none',
    color : '#FFF',
    width: '100%',
    paddingTop :"15px",
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};
