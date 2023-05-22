import { Box, Text, Button, ChakraProvider, Flex,Link, Divider, Container, useColorModeValue} from '@chakra-ui/react';
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { useState } from 'react';

const texts = [
  {
    title: 'Visi dan Misi Program Studi Teknik Informatika - S1',
    content:
      'Visi: “Menjadi Program Studi yang Unggul di Bidang Informatika, Khususnya Bidang Rekayasa Perangkat Lunak dan Sistem Cerdas, yang Berjiwa Technopreunership dan Berwawasan Internasional pada Tahun 2023”\n\nMisi:\n\n1. Menyelenggarakan pendidikan berkualitas di bidang informatika yang berperan strategis dalam mencerdaskan kehidupan bangsa peningkatan kesejahteraan masyarakat, serta berorientasi pada pengembangan ilmu pengetahuan dan kewirausahaan.\n\n2. Meningkatkan program penelitian di bidang informatika khususnya bidang rekayasa perangkat lunak dan sistem cerdas yang berkualitas dan berkelanjutan.\n\n3. Meningkatkan program pengabdian pada masyarakat yang berkualitas dan berkelanjutan.\n\n4. Menjalin kerjasama yang berdampak pada peningkatan kualitas mahasiswa, dosen, dan organisasi.',
  },
  {
    title: 'Visi dan Misi Universitas Dian Nuswantoro 2',
    content:
      'Visi: "Menjadi Universitas pilihan utama di bidang pendidikan dan kewirausahaan.\n\nMisi:\n\n1. Menyelenggarakan pendidikan tinggi yang berkualitas.\n\n2. Menumbuhkembangkan kreatifitas dan inovasi civitas akademika yang bermanfaat bagi masyarakat, pemerintah dan dunia usaha.',
  },
];

 


const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextText = () => {
    setActiveIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };

  const prevText = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  return (
    <ChakraProvider>
      <Box p={4} maxW="100%">
        <Flex w="100%" direction="row" align="center" justify="center">
          <Button bg={useColorModeValue('#ffffff40', '#20202380')} onClick={prevText} mr={2}>
            <BsFillArrowLeftCircleFill/>
          </Button>
          <Box w="100%">
            <Box border="1px" bg="blue.100" maxW="100vw" p={4}>
              <Text height="30px" fontSize="sm" align="center" fontWeight="bold" mb={4}>
                {texts[activeIndex].title}
              </Text>
              <Text bg="blue.200" fontSize="sm" whiteSpace="pre-line">{texts[activeIndex].content}</Text>
            </Box>
          </Box>
          <Button onClick={nextText} ml={2}>
            <BsFillArrowRightCircleFill size="xl"/>
          </Button>
        </Flex>
      </Box>

      <Box p={4} w="100%">
        <Container maxW="100%" justify="center">
          <Flex bg="white" h={{ base: "auto", md: "30vh" }} flexDir="column">
            <Box h="10" bg="gray" textAlign="center">
              <Text>Silahkan Lengkapi Data Anda</Text>
            </Box>
            <Box textColor="black" p={2}>
            <Text>
            Untuk menunjang kegiatan akademik maupun non akademik di kampus silahkan lengkapi data diri mahasiswa melalui menu-menu berikut :
            </Text>
            <Box>
            <Text>
            - E-TICKET KTM (untuk proses pembuatan Kartu Tanda Mahasiswa)
          </Text>
          <Text>
            - BIODATA-&gt;Update Data Diri (untuk kelengkapan pelaporan data PDDIKTI)
          </Text>
          <Text>
            - BIODATA-&gt;Curriculum Vitae (untuk pendataan data non akademis)
          </Text>
          <Text>
            - DOKUMEN-&gt;Repository-&gt;Upload Foto Ujian (foto yang digunakan selama kuliah)
          </Text>
          <Text>
            - FORM HERREGISTRASI (Pop Up otomatis di halaman awal SiAdin pada setiap awal tahun ajaran, tidak akan muncul lagi setelah berhasil diisi)
          </Text>
            </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box w="100%" p={4}>
        <Container maxW="100%" bg="white">
          <Flex bg="white" border="1px" flexDir="column" w={{base: "auto"}} h={{ base: "auto", md: "30vh" }}>
            <Flex bg="blue" h="10" align="center" justify="center"> 
              <Link>
                <Text>Panduan Akademik Fakultas</Text>
              </Link>
              <Divider orientation="vertical" mx={4}/>
              <Link>
                <Text>Panduan Akademik Universitas</Text>
              </Link>
            </Flex>
            <Flex bg="blue.50" h="10" align="center" justify="center">
            Follow UDINUS on social media to keep up-to-date with the latest information
            </Flex>
            <Flex bg="blue.200" justifyContent="space-evenly" h="40" align="center" justify="center">
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Carousel;
