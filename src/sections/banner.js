/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button , Link } from 'theme-ui';
import { rgba } from 'polished';
import Select from 'components/select';
import bannerBg from 'assets/images/banner-bg.jpg';
import mapMarker from 'assets/images/icons/map-marker.png';
import { BsTextCenter } from 'react-icons/bs';


export default function Banner() {
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
              RAVELO MEVA SOAVINA
            </Heading>
            <Heading as="h3" sx={styles.secondaryTitle}>
              Developpeur Web
            </Heading>
            <Box>
              <Button type="submit" sx={styles.button} variant="primary" >
                  <Link href="https://github.com/RaveloMevaSoavina" target='_blank' sx={styles.link}>
                    Visiter mon profil Github 
                  </Link>
              </Button>
              <Button type="submit" sx={styles.button} variant="primary">
                Télecharger mon CV
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
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: ['20vh', '20vh', null, null, '70vh', '85vh'],
  },
  bannerContent: {
    // backgroundColor: rgba('#fff',0.5),
    // boxShadow: [
    //   '0px 10px 16px rgba(52, 61, 72, 0.12)',
    //   null,
    //   null,
    //   null,
    //   'none',
    // ],
    textAlign: 'center',
    maxWidth: [600, null, null, 600, 400, '100vw', '100vw'],
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
    fontSize: [22, 24, 28, 35, 35, '30px', 5],
    fontWeight: 800,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, null],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 35,
    },
  },
  secondaryTitle : {
    fontSize: [22, 24, 28, 35, 35, '25px', '30px'],
    mb : '20px',
    fontWeight: 500,
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
