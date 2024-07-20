import type { IconProps } from '@chakra-ui/icon';
import { Icon } from '@chakra-ui/icon';

export const UniappIcon = ({ color = '#6FB737', width, height }: IconProps) => (
  <Icon viewBox="0 0 1024 1024" width={width} height={height}>
    <path
      d="M0 0v1023.780047h1023.780047V0H0z m815.504794 854.856339H208.275253V212.43436h133.881237V726.163988h339.467067V212.43436h133.881237v642.421979z"
      fill={color as string}
    />
    <path
      d="M681.623557 726.15399H342.15649V212.43436H208.275253v642.421979h607.229541V212.43436H681.623557z"
      fill="#FFFFFF"
    />
  </Icon>
);
