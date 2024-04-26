import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Box, Chip, Typography } from '@mui/material';

interface SentenceDragDropProps {
  sentences: string[];
}

export const SentenceDragDrop: React.FC<SentenceDragDropProps> = ({ sentences }) => {
  const [ completedSentences, setCompletedSentences ] = useState<number[]>([]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const sourceIdParts = result.source.droppableId.split('-');
    const destinationIdParts = result.destination.droppableId.split('-');

    const sourceSentenceIndex = parseInt(sourceIdParts[sourceIdParts.length - 1]);
    const destinationSentenceIndex = parseInt(destinationIdParts[destinationIdParts.length - 1]);

    if (sourceSentenceIndex !== destinationSentenceIndex) return;

    const newSentences = [ ...sentences ];
    const words = newSentences[sourceSentenceIndex].split(' ');

    const [ removedWord ] = words.splice(result.source.index, 1);
    words.splice(result.destination.index, 0, removedWord);

    newSentences[sourceSentenceIndex] = words.join(' ');

    if (words.join(' ') === sentences[sourceSentenceIndex]) {
      setCompletedSentences(prev => [ ...prev, sourceSentenceIndex ]);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {sentences.map((sentence, index) => (
        <Droppable key={index} droppableId={`sentence-${ index }`} isDropDisabled={completedSentences.includes(index)}>
          {(provided) => (
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              mb={2}
              bgcolor={completedSentences.includes(index) ? 'lightgreen' : 'transparent'}
              p={2}
            >
              <Typography variant='body1'>
                {sentence.split(' ').map((word, wordIndex) => (
                  <Draggable key={wordIndex} draggableId={`word-${ index }-${ wordIndex }`} index={wordIndex}>
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        display='inline-block'
                        mr={1}
                      >
                        <Typography variant='body1' component='span'>
                          {word}
                        </Typography>
                      </Box>
                    )}
                  </Draggable>
                ))}
              </Typography>
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

