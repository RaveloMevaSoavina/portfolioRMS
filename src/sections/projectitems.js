import { rgba } from 'polished';
import { useState, useRef, useEffect } from 'react';
import { jsx, Box, Container, Image, Flex, Link , Button , Close , Card} from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import SectionHeading from 'components/section-heading';
import ContactCard from 'components/cards/contact-card'

import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

export default function projectitems({post , lookAt}) {
  
    return (
    <Box sx={{
      width: "100vw",
      height : "100vh",
      backgroundColor : "rgba(0, 0, 0, 0.7)",
      position : "fixed",
      top :0,
      right : 0,
      left : 0,
      zIndex : 9999,
    }}>
    <Card as="section" sx={styles.section} id="project">
      <Close onClick={()=>lookAt(0)} sx={styles.close}/>
      <Container>
        <Flex sx={styles.contentWrapper}>
          <Box as="figure" sx={styles.illustration}>
            <Image loading="lazy" src={post.img} alt={post.title} />
            <Button variant="white" sx={styles.button}>
                  <Link href={post?.live} target='_blank' sx={styles.live}>
                    Visualisation d'un démo
                  </Link>
            </Button>
          </Box>
          
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title={post.title}
              description={post.goal}
            />
            <Box sx={{ textAlign: ['center', 'center', 'center', 'left'] }}>
                <h4>Technologie utilisée : </h4>
                <ul>
                    {post?.stack?.map(item => 
                        <li>{item}</li>
                    )}
                </ul>
            </Box>
            <Box sx={{ height : "100px"}}></Box>
          </Box>
        </Flex>
      </Container>
  </Card>
  </Box>
    )
}

const styles = {
  
    section: {
      p: [60, 60, 60, 50, 50, 50],
      // backgroundColor: '#EDF0F2',
      backgroundColor: '#EDF0F2',
      m: [5, 10, 15, 20, 20, 5],
      zIndex: 100,
      position: "fixed",
      top : 0,
      left : "20px",
      overflow : "hidden",
      overflowY: "scroll",
      maxHeight: "100%"
    },
    close : {
      position : "absolute",
      top : "10px",
      right : "20px"
    },
    contentWrapper: {
      display: ['flex'],
      // alignItems: ['center'],
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
      m: [0, 0, 0, 0, '0px 48px 0px 0px', '0px 30px 0px 0px'],
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
    live: {
        textDecoration : 'none',
        color : "#000",
        width: '100%',
        padding : "15px",
      svg: {
        transition: 'margin-left 0.3s ease-in-out 0s',
      },
      ':hover': {
        color : "#FFF",
        svg: {
          ml: '5px',
        },
      },
    },
    button: {
        marginTop: '2rem',
        minHeight: [50, 50, 50, 60],
        fontSize: [14, 14, 16],
        width: '100%',
        bg : "white",
        color : "dark",
        svg: {
          transition: 'margin-left 0.3s ease-in-out 0s',
        },
        ':hover': {
          bg : "dark",
          color : "#FFF",
          svg: {
            ml: '5px',
          },
        },
      },
  };
  