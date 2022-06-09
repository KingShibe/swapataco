import React from 'react';
import {
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react';

function Popup(props) {
  return (props.trigger) ? (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      py={12}
      bg={props.color1}>
      <Stack
        boxShadow={'2xl'}
        bg={props.color2}
        rounded={'xl'}
        p={10}
        spacing={8}
        align={'center'}>
        <Stack align={'center'} spacing={2}>
          <Heading
            textTransform={'uppercase'}
            fontSize={'3xl'}
            color={props.color3}>
            Acknowledge & Connect
          </Heading>
          <Text fontSize={'lg'} color={'gray.500'} maxWidth={'500px'}>
            By connecting your wallet and using our site, you acknowledge that we are not liable for any losses.
            Swap A Taco is an <a href="https://github.com/LittleDonutG/swapataco">[open source]</a>, free to use frontend for swapping Tezos NFTs utilizing the <a href="https://tzkt.io/KT1XtJ6k51y7HpLFLTNv2wBYFhfVMZ6ow3Sz/operations/">[contract]</a> created by <a href="https://github.com/jagracar">[Javier Graciá Carpio]</a>.
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
            {props.children}
        </Stack>
      </Stack>
    </Flex>
  ) : "";
}

export default Popup;
