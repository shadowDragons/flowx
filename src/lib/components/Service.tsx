'use client';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import '~/lib/styles/serviceCard.css';

import services from '../data/serviceData';
import { fadeInUp } from '~/lib/components/motion/variants';

export interface ServiceProps {
  heading: string;
  description: string;
  icon: string;
}

const Card = ({ heading, description, icon }: ServiceProps) => {
  return (
    <div className="serviceCard">
      <Flex direction="column" alignItems="center">
        <Image src={icon} w="96px" marginBottom={5} />
        <Text fontSize={20} color="black">
          {heading}
        </Text>
      </Flex>

      <div className="serviceCard__content">
        <p className="serviceCard__title">{heading}</p>
        <p className="serviceCard__description">{description}</p>
      </div>
    </div>
  );
};

export default function Service() {
  return (
    <Box py={10}>
      <Flex
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
        gridGap={6}
        justify="space-around"
      >
        {services.map((v) => {
          return (
            <motion.div variants={fadeInUp}>
              <Card
                heading={v.heading}
                icon={v.icon}
                description={v.description}
              />
            </motion.div>
          );
        })}
      </Flex>
    </Box>
  );
}
