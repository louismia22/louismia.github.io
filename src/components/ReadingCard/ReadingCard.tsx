import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useThemeMediaQuery } from '../../utils/hooks/useThemeMediaQuery';
import { DynamicText } from '../DynamicText/DynamicText';
import {
  sxReadingCardContainer,
  sxReadingCardContainerSmall,
  sxReadingCardContainerTitle,
  sxReadingCardItemContainer,
  sxReadingCardItemSubtitle,
  sxReadingCardItemTitle,
} from './ReadingCard.styles';

export const ReadingCard = () => {
  const { isSmall } = useThemeMediaQuery();

  return (
    <Box sx={isSmall ? sxReadingCardContainerSmall : sxReadingCardContainer}>
      <Typography sx={sxReadingCardContainerTitle}>
        <DynamicText textId={'readings'} />
      </Typography>
      <Box sx={sxReadingCardItemContainer}>
        <Typography sx={sxReadingCardItemTitle}>
          <DynamicText textId="readings-1-title" />
        </Typography>
        <Typography sx={sxReadingCardItemSubtitle}>
          <DynamicText textId="readings-1-info" />
        </Typography>
      </Box>
      <Box sx={sxReadingCardItemContainer}>
        <Typography sx={sxReadingCardItemTitle}>
          <DynamicText textId="readings-2-title" />
        </Typography>
        <Typography sx={sxReadingCardItemSubtitle}>
          <DynamicText textId="readings-2-info" />
        </Typography>
      </Box>
      <Box sx={sxReadingCardItemContainer}>
        <Typography sx={sxReadingCardItemTitle}>
          <DynamicText textId="readings-3-title" />
        </Typography>
        <Typography sx={sxReadingCardItemSubtitle}>
          <DynamicText textId="readings-3-info" />
        </Typography>
      </Box>
      <Box sx={sxReadingCardItemContainer}>
        <Typography sx={sxReadingCardItemTitle}>
          <DynamicText textId="readings-4-title" />
        </Typography>
        <Typography sx={sxReadingCardItemSubtitle}>
          <DynamicText textId="readings-4-info" />
        </Typography>
      </Box>
    </Box>
  );
};