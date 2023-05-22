import React from 'react'
import { Grid, Box, GridItem, Text, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import { HiOutlineAcademicCap } from 'react'
import { useState, useEffect } from 'react'
import {keyframes} from '@emotion/react'



const MainDash = () => {
    const { colorMode } = useColorMode();
    
    const animateBorder = keyframes`
    0% {
      background-position: 0% 0;
    }
    100% {
      background-position: 100% 0;
    }
  `;

  return (
    <Box>
      <Grid h={{base: "50vh", md:"70vh"}} 
      templateColumns={{base: "repeat(5, 1fr)", md: "repeat(8, 1fr)"}}
      templateRows={{base: "repeat(5, 1fr)", md: "repeat(7, 1fr)"}}
     
      gap={4}>
        <GridItem 
        cursor="pointer" 
        borderRadius="md" 
        rowSpan={{base: 12, md: 3}} 
        colSpan={{base: 8, md: 2}} 
        bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}
      
      
        >
            <Link href="/carousel"/>
            <Text>Akademik</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 8, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>massage</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 3, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>keuangan</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 5, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>kalender</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 8, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Profile</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 3, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Pengumuman</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 5, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Kuliah Online</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 3, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Visi Misi</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 5, md: 2}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Tugas Akhir</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 8, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Dokumen</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 8, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Aspirasi</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 8, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Kerja Praktek</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 3, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>E-Ticket KTM</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 5, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>PKM</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 3, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Beasiswa</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 5, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Panduan</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 3, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Galery</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 2}} colSpan={{base: 5, md: 3}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Prestasi</Text>
        </GridItem>
        
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 7}} colSpan={{base: 3, md: 2}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Career</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 6}} colSpan={{base: 5, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Alumni</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 6}} colSpan={{base: 3, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Pemira</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 6}} colSpan={{base: 5, md: 3}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Ujian Online</Text>
        </GridItem>
        <GridItem borderRadius="md" rowSpan={{base: 9, md: 6}} colSpan={{base: 8, md: 1}}  bg={colorMode === "dark" ? "transparent" : "tomato"}
      border={colorMode === "dark" ? "2px solid teal" : "2px solid"}>
            <Text>Lapakku</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default MainDash
