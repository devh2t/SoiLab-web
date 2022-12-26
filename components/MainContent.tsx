/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IconArrowNarrowRight, IconDownload } from '@tabler/icons';
import Link from 'next/link';
import { Box, Button, Group, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function MainContent() {
    const match = useMediaQuery('(max-width: 877px)', false);
    return (
        <Box>
            <Title align={match ? 'center' : 'left'} className='pixsoil'>
                
                <sup>
                    <img
                        src='https://raw.githubusercontent.com/devh2t/SoiLab_AI_Front/main/app/assets/logo.png'
                        alt='logo'
                        width={'400px'} />
                </sup>
            </Title>
            <Title align={match ? 'center' : 'left'} order={2}> Scanner votre sol ,pour choisir la culture adéquate à planter.  </Title>
            <Text align={match ? 'center' : 'left'} mt='xs'>
                A machine learning application pour la classification du type du sol.
            </Text>

            <Group mt='5rem' position={match ? 'center' : 'left'}>
                {/* <Link href={'/app/Pixsoil.apk'} download>
                    <Button size='lg' style={{ backgroundColor: '#86d72f' }}>
                        Download android app &nbsp; <IconDownload />
                    </Button>
                </Link> */}
                <Link href={'/web'}>
                    <Button size='lg' style={{ backgroundColor: '#815115' }}>
                        Essayer SoiLab AI &nbsp; <IconArrowNarrowRight />
                    </Button>
                </Link>
            </Group>

            <Group mt='6rem' spacing={'md'} position={match ? 'center' : 'left'}>
                <Link href={'/about'} passHref>
                    <Text style={{ cursor: 'pointer' }}>What is SoiLab AI?</Text>
                </Link>
                {/* <Link href={'/researchers'} passHref>
                    <Text style={{ cursor: 'pointer' }}>The Researchers</Text>
                </Link> */}
            </Group>
        </Box>
    );
}
