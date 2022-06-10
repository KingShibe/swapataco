import React from 'react';
import {
  Flex,
  Stack,
  Text
} from '@chakra-ui/react';

function DonationPopup(props) {
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
          <Text fontSize={'lg'} color={'gray.500'} width={'350px'}></Text>
        </Stack>
        {props.children}
      </Stack>
    </Flex>
  ) : "";
}

export default DonationPopup;
