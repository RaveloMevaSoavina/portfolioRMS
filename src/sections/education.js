/** @jsx jsx */
import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { jsx, Grid, Box, Container, Flex, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceCard from 'components/cards/price-card';
import { rgba } from 'polished';
import { keyframes } from '@emotion/core';

import userIcon from 'assets/images/icons/two-users.png';
import userIcon2 from 'assets/images/icons/three-users.png';

const monthlyPricing = [
  {
    id: 1,
    icon: userIcon,
    title: 'Ecole privée TANTELY',
    amount: '2000 - 2010',
    isRecommended: true,
    grade: "CEPE",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "From age 5 to 15",
      },
      {
        id: 2,
        isAvailable: true,
        title: `From kindergarten to 4th grade`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Diploma obtained: CEPE`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Ambohijanaka Soaranokely`,
      },
    ],
  },
  {
    id: 2,
    icon: userIcon2,
    title: 'Institution Sainte-Famille',
    amount: '2010 - 2013',
    isRecommended: true,
    grade: "Baccalaureate",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'From 15 to 18 years old',
      },
      {
        id: 2,
        isAvailable: true,
        title: `From 4th grade to final year of high school`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Diploma obtained: BEPC - BEP - BACC`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Antananarivo Mahamasina`,
      },
    ],
  },
];

const annualPricing = [
  {
    id: 1,
    icon: userIcon,
    title: 'Ecole Supérieure Polytechnique d\'Antananarivo',
    amount: "2014 - 2017",
    isRecommended: true,
    grade: "Bachelor's degree L3",
    features: [
      {
        id: 2,
        isAvailable: true,
        title: `From 19 to 23 years old`,
      },
      {
        id: 1,
        isAvailable: true,
        title: `Licence 1 to Licence 3`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Diploma obtained: ELECTRONICS LICENCE`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Antananarivo Vontovorona`,
      },
    ],
  },
  {
    id: 2,
    icon: userIcon2,
    title: 'Ecole Supérieure Polytechnique d\'Antananarivo',
    amount: "2017 - 2019",
    isRecommended: true,
    grade: "Master M2",
    features: [
      {
        id: 4,
        isAvailable: true,
        title: `From 23 ans to 24 ans`,
      },
      {
        id: 2,
        isAvailable: true,
        title: `Master 1 to Master 2`,
      },
      {
        id: 1,
        isAvailable: true,
        title: `Diploma obtained: : ELECTRONIC ENGINEERING`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Antananarivo Vontovorona`,
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'yearly',
    data: annualPricing,
  });

  const handlePlan = (plan) => {
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        data: monthlyPricing,
      });
    }
    if (plan === 'yearly') {
      setPlan({
        ...plan,
        active: 'yearly',
        data: annualPricing,
      });
    }
  };

  return (
    <Box id="pricing" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="My background"
          title="High School and University"
          description={"With a master's degree in electronics, my academic journey laid the foundation for my enduring passion for technology and problem-solving. This background, coupled with my years of hands-on experience in web development, equips me with a unique blend of theoretical knowledge and practical skills to tackle intricate challenges in the digital landscape."}
        />
        <Flex sx={styles.priceSwitcher}>
          <Button
            variant="text"
            className={plan?.active === 'monthly' ? 'active' : ''}
            onClick={() => handlePlan('monthly')}
          >
            High School {"  "}
          </Button>
          <Button
            variant="text"
            className={plan?.active === 'yearly' ? 'active' : ''}
            onClick={() => handlePlan('yearly')}
          >
            University
          </Button>
        </Flex>
        <Grid sx={styles.grid}>
          {plan?.data?.map((price, index) => (
            <PriceCard price={price} key={`${plan.active}-${index}`} annee={plan.active} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#020718',
    pt: [60],
    pb: [100, 100, 100, 80],
  },
  heading: {
    color: '#fff',
    mb: 20,
    p: {
      color: '#fff',
    },
  },
  priceSwitcher: {
    borderRadius: '5px',
    border: `1px solid ${rgba('#FFFFFF', 0.2)}`,
    margin: ['0 auto 30px', '0 auto 30px', '0 auto 30px', '0 auto 60px'],
    maxWidth: [255, 255, 255, 300],
    px: 4,
    py: 2,
    button: {
      minHeight: ['40px', '40px', '40px', '48px'],
      px: ['18px', '18px', '18px', '25px'],
      fontSize: [14, 14, 14, 16],
      fontWeight: 500,
      color: 'white',
      '&.active': {
        backgroundColor: '#fff',
        color: 'text',
      },
      ':focus': {
        outline: '0 none',
      },
    },
  },
  grid: {
    gap: ['60px 30px'],
    display: 'grid',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 340px)',
      'repeat(2, 430px)',
      'repeat(2, 440px)',
      'repeat(2, 480px)',
    ],
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
