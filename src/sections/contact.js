/** @jsx jsx */
import { jsx, Box, Container, Image, Flex, Link } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import SectionHeading from 'components/section-heading';
import customer from 'assets/images/customer.png';
import ContactCard from 'components/cards/contact-card'
import LogoLinkedin from 'assets/images/gallery/1.png';
const data = [
    {
      id: 1,
      title: 'Linkedin',
      link : `https://www.linkedin.com/in/meva-soavina-ravelo-8a455120a/`
    },
    {
      id: 2,
      title: 'Facebook',
      link : 'https://www.facebook.com/ravelo.mevasoavina/'
    },
    {
      id: 3,
      title: 'Github',
      link : 'https://github.com/RaveloMevaSoavina'
    },
    {
      id: 4,
      title: 'Gmail',
      link : ''
    },
    {
      id: 5,
      title: 'Dribbble',
      link : 'https://dribbble.com/RaveloMevaSoavina'
    },
    
]

const OurCustomer = () => {
  return (
    <Box as="section" sx={styles.section} id="contact">
      <Container>
        <Flex sx={styles.contentWrapper}>
          <Flex as="figure" sx={styles.illustration}>
            <Image loading="lazy" src={customer} alt="customer" />
          </Flex>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Vous pouvez me joindre sur plusieurs platforme"
              description="Laissez-moi un message , ça me fera plaisir de vous répondre."
            />
            <Box sx={{ textAlign: ['center', 'center', 'center', 'left'] }}>
            {data?.map((item) => (
                  <ContactCard key={item.id} item={item}/>
            ))}
              {/* <Link variant="links.learnMore" sx={styles.link} href="#!">
                Linkedin 
              </Link> */}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurCustomer;

const styles = {
  section: {
    pt: [60, 60, 60, 60, 80, 9],
    pb: [30, 30, 6],
  },
  contentWrapper: {
    display: ['flex'],
    alignItems: ['center'],
    flexDirection: [
      'column-reverse',
      'column-reverse',
      'column-reverse',
      'row',
    ],
  },
  illustration: {
    alignItems: ['flex-start'],
    maxWidth: ['none', 'none', 'none', 'none', 480, 530, 760],
    m: ['50px 0 0', '50px 0 0', '50px 0 0', 0, '0 20px 0 0', '0 48px 0 0'],
  },
  rightContent: {
    m: [0, 0, 0, 0, '0px 48px 0px 0px', '0px 95px 0px 0px'],
  },
  heading: {
    textAlign: ['center', 'center', 'center', 'left'],
    marginLeft: 0,
    maxWidth: 580,
    m: ['0 auto 27px', '0 auto 27px', '0 auto 27px', '0 0 30px'],
    h2: {
      fontSize: [22, 22, 22, 28, 30, 36, 46],
      lineHeight: [1.6, 1.6, 1.6, 1.41],
      fontWeight: [500, 500, 500, 400],
    },
    p: {
      fontSize: ['15px', '15px', '15px', '17px'],
      mt: [3, 3, 3, 20, 5],
    },
  },
  link: {
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
