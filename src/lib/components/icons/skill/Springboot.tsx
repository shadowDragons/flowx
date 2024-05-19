import type { IconProps } from '@chakra-ui/icon';
import { Icon } from '@chakra-ui/icon';

export const SpringbootIcon = ({
  color = '#68BD45',
  width,
  height,
}: IconProps) => (
  <Icon viewBox="0 0 1024 1024" width={width} height={height}>
    <path
      d="M1126.133275 450.542218l-224.659865-388.973301C881.969177 27.783807 834.069894 0 795.061428 0H345.741697c-38.89733 0-86.907749 27.783807-106.411981 61.457782l-224.659866 388.973301c-19.5598 33.78511-19.5598 88.908183 0 122.915563l224.659866 388.973302c19.504233 33.78511 67.403516 61.457782 106.411981 61.457782h449.319731c38.89733 0 86.852181-27.783807 106.411982-61.457782l224.659865-388.973302c19.5598-33.729542 19.5598-88.963751 0-122.804428zM521.835468 215.157803a46.34339 46.34339 0 1 1 92.631213 0v276.782288a46.34339 46.34339 0 1 1-92.631213 0zM568.178858 805.73041A314.01259 314.01259 0 0 1 380.86043 239.885392a41.175602 41.175602 0 1 1 49.177339 66.069893 231.661385 231.661385 0 1 0 369.746906 185.984806A232.772737 232.772737 0 0 0 705.708704 305.62188a41.175602 41.175602 0 0 1 48.67723-66.681138 314.068157 314.068157 0 0 1-186.207076 566.789668z"
      fill={color as string}
      // eslint-disable-next-line react/no-unknown-property
      p-id="8429"
    />
  </Icon>
);