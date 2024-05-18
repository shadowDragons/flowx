'use client';

import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const list = {
  visible: {
    opacity: 1,
    transition: {
      // 所有子元素启动变化会比元素元慢0.5秒
      delayChildren: 0.5,
    },
  },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function App() {
  return (
    <Flex flex={1} justifyContent="center">
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        style={{ backgroundColor: 'red' }}
      >
        <motion.li variants={item}>1231231231312</motion.li>
        <motion.li variants={item}>1231231231312</motion.li>
        <motion.li variants={item}>1231231231312</motion.li>
      </motion.ul>
    </Flex>
  );
}
