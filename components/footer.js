import { Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react';



const Footer = () => {
  

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleString());
  }, []);


  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      N0T Siadin &copy; 2008 - {new Date().getFullYear()} All rights reserved <span>(App-24 103.13.204.33)</span> 
    </Box>
  )
}

export default Footer