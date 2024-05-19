import type { IconProps } from '@chakra-ui/icon';
import { Icon } from '@chakra-ui/icon';

export const VueIcon = ({ color = '#41B883', width, height }: IconProps) => (
  <Icon viewBox="0 0 1024 1024" width={width} height={height}>
    <path
      d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"
      fill={color as string}
      // eslint-disable-next-line react/no-unknown-property
      p-id="3383"
    />
    <path
      d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"
      fill={color as string}
      // eslint-disable-next-line react/no-unknown-property
      p-id="3384"
    />
  </Icon>
);
