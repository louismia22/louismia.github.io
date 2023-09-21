import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useThemeMediaQuery } from '../../utils/hooks/useThemeMediaQuery';
import { DynamicText } from '../DynamicText/DynamicText';
import {
  sxInterestCardContainer,
  sxInterestCardContainerSmall,
  sxInterestCardContainerTitle,
  sxInterestCardItemContainer,
  sxInterestCardItemSubtitle,
  sxInterestCardItemTitle,
} from './InterestCard.styles';

export const InterestCard = () => {
  const { isSmall } = useThemeMediaQuery();

  return (
    <Box sx={isSmall ? sxInterestCardContainerSmall : sxInterestCardContainer}>
      <Typography sx={sxInterestCardContainerTitle}>
        <DynamicText textId={'interests'} />
      </Typography>
      <Box sx={sxInterestCardItemContainer}>
        <Typography sx={sxInterestCardItemTitle}>
          <DynamicText textId="interests-1-title" />
        </Typography>
        <Typography sx={sxInterestCardItemSubtitle}>
          <DynamicText textId="interests-1-info" />
        </Typography>
      </Box>
      <Box sx={sxInterestCardItemContainer}>
        <Typography sx={sxInterestCardItemTitle}>
          <DynamicText textId="interests-2-title" />
        </Typography>
        <Typography sx={sxInterestCardItemSubtitle}>
          <DynamicText textId="interests-2-info" />
        </Typography>
      </Box>
      <Box sx={sxInterestCardItemContainer}>
      <Typography sx={sxInterestCardItemTitle}>
        <DynamicText textId="interests-3-title" />
      </Typography>
      <Typography sx={sxInterestCardItemSubtitle}>
        <DynamicText textId="interests-3-info" />
      </Typography>
      </Box>
      <Box sx={sxInterestCardItemContainer}>
      <Typography sx={sxInterestCardItemTitle}>
        <DynamicText textId="interests-4-title" />
      </Typography>
      <Typography sx={sxInterestCardItemSubtitle}>
        <DynamicText textId="interests-4-info" />
      </Typography>
      </Box>
    </Box>
  );
};