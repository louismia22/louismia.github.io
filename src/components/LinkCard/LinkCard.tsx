import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useThemeMediaQuery } from '../../utils/hooks/useThemeMediaQuery';
import { AnimatedIconPrimaryButton } from '../AnimatedIconPrimaryButton/AnimatedIconPrimaryButton';
import { DynamicText } from '../DynamicText/DynamicText';
import { DownloadIcon } from '../Icons/DownloadIcon/DownloadIcon';
import {
  sxLinkCardContainer,
  sxLinkCardContainerSmall,
  sxLinkCardDownloadContainer,
  sxLinkCardItemContainer,
  sxLinkCardItemTypography,
  sxLinkCardTitle,
} from './LinkCard.styles';

export const LinkCard = () => {
  const theme = useTheme();
  const { isSmall, isMedium } = useThemeMediaQuery();

  return (
    <Box
      sx={isSmall || isMedium ? sxLinkCardContainerSmall : sxLinkCardContainer}
      id={'contact'}
    >
      <Typography sx={sxLinkCardTitle}>
        <DynamicText textId={'contact'} />
      </Typography>
      <Box sx={sxLinkCardItemContainer}>
        <PhoneIcon color="primary" />
        <Link sx={sxLinkCardItemTypography} href="tel:+33780037117">
          +33 7 80 03 71 17
        </Link>
      </Box>
      <Box sx={sxLinkCardItemContainer}>
        <EmailIcon color="primary" />
        <Link
          sx={sxLinkCardItemTypography}
          href="mailto:lm.lovichi@me.com"
        >
          lm.lovichi@me.com
        </Link>
      </Box>
      <Box sx={sxLinkCardItemContainer}>
        <LinkedInIcon color="primary" />
        <Link
          sx={sxLinkCardItemTypography}
          href="https://www.linkedin.com/in/louis-marie-lovichi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/louis-marie-lovichi
        </Link>
      </Box>
      <Box sx={sxLinkCardItemContainer}>
        <GitHubIcon color="primary" />
        <Link
          sx={sxLinkCardItemTypography}
          href="https://github.com/louismia22"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/louismia22
        </Link>
      </Box>
      <Box sx={sxLinkCardItemContainer}>
        <LanguageOutlinedIcon color="primary" />
        <Link sx={sxLinkCardItemTypography} href="https://louismia22.github.io/">
        louismia22.github.io
        </Link>
      </Box>
      <Box sx={sxLinkCardItemContainer}>
        <LocationOnIcon color="primary" />
        <Link
          sx={sxLinkCardItemTypography}
          href="https://www.google.com/maps/place/Paris,+France/@48.8589466,2.2769956,12z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219!16zL20vMDVxdGo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paris, France
        </Link>
      </Box>
      <Box sx={sxLinkCardDownloadContainer}>
        <AnimatedIconPrimaryButton
          text={'download-cv-text'}
          icon={
            <DownloadIcon
              width="14"
              height="14"
              color={theme.palette.primary.main}
            />
          }
        />
      </Box>
    </Box>
  );
};
