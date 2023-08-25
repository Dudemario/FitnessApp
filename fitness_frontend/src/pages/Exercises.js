import React from 'react';
import ListExercises from '../components/ListExercises';
import SearchExercises from '../components/SearchExercises';
import { Box } from '@mui/material';

const Exercises = () => {
  return (
    <Box>
      <SearchExercises />
      <ListExercises />
    </Box>
  )
}

export default Exercises