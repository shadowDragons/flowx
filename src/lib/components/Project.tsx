'use client';

import { Box, Image } from '@chakra-ui/react';
import '~/lib/styles/projectItemCard.css';

export type ProjectItemProps = {
  name: string;
  image: string;
  type: string;
};

const ProjectItem = ({ name, image, type }: ProjectItemProps) => {
  return (
    <Box className={type === 'mobile' ? 'flip-card-mobile' : 'flip-card'}>
      <Box className="flip-card-inner">
        <Box className="flip-card-front">
          <Box as="p" className="title">
            <Image src={image} />
          </Box>
        </Box>
        <Box className="flip-card-back">
          <Box as="p" className="title">
            {name}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectItem;
