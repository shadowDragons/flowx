import type { IconProps } from '@chakra-ui/icon';
import { Icon } from '@chakra-ui/icon';

export const RabbitmqIcon = ({
  color = '758C99',
  width,
  height,
}: IconProps) => (
  <Icon viewBox="0 0 1024 1024" width={width} height={height}>
    <path
      d="M192 128h-128v768h896V384h-384V128h-128v256h-256V128zM384 320v-256h256v256h384v640H0V64h256v256h128z"
      fill={color as string}
    />
    <path
      d="M640 576v128h128v-128H640zM576 512h256v256h-256V512z"
      fill={color as string}
    />
  </Icon>
);
