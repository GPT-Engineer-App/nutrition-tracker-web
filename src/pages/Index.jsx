import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, Table, Thead, Tbody, Tr, Th, Td, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [entries, setEntries] = useState([]);

  const handleAddEntry = () => {
    if (food && calories) {
      const newEntry = { food, calories: parseInt(calories) };
      setEntries([...entries, newEntry]);
      setFood("");
      setCalories("");
    }
  };

  const handleRemoveEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const totalCalories = entries.reduce((sum, entry) => sum + entry.calories, 0);

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Nutrition Tracker
      </Heading>

      <VStack spacing={4} align="stretch">
        <HStack>
          <Input placeholder="Food" value={food} onChange={(e) => setFood(e.target.value)} />
          <Input placeholder="Calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
          <IconButton icon={<FaPlus />} onClick={handleAddEntry} colorScheme="blue" />
        </HStack>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Food</Th>
              <Th>Calories</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {entries.map((entry, index) => (
              <Tr key={index}>
                <Td>{entry.food}</Td>
                <Td>{entry.calories}</Td>
                <Td>
                  <IconButton icon={<FaTrash />} onClick={() => handleRemoveEntry(index)} size="sm" colorScheme="red" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Text fontSize="xl" fontWeight="bold">
          Total Calories: {totalCalories}
        </Text>
      </VStack>
    </Box>
  );
};

export default Index;
