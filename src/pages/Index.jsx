import { Container, Text, VStack, Heading, Image, Box, Button } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Panda World</Heading>
        <Image src="/images/panda.jpg" alt="Panda" borderRadius="md" boxSize="300px" objectFit="cover" />
        <Text fontSize="lg" textAlign="center">Discover the amazing world of pandas. Learn about their habitat, diet, and why they are so special.</Text>
        <Box>
          <Button leftIcon={<FaPaw />} colorScheme="teal" size="lg">Learn More</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;