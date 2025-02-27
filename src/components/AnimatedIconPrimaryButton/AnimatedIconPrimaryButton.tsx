import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import EnglishPDF from '../../assets/documents/Louis-Marie-Lovichi-CV.pdf';
import FrenchPDF from '../../assets/documents/Louis-Marie-Lovichi-CV.pdf';
import { LanguageContext } from '../../context';
import { DynamicText } from '../DynamicText/DynamicText';
import { AnimatedIconPrimaryButtonProps } from './AnimatedIconPrimaryButton.models';
import {
  sxDownloadBottomIcon,
  sxDownloadButton,
} from './AnimatedIconPrimaryButton.styles';

export const AnimatedIconPrimaryButton = (
  props: AnimatedIconPrimaryButtonProps,
) => {
  const { text, icon } = props;

  const context = React.useContext(LanguageContext);

  return (
    <Button component="button" sx={sxDownloadButton}>
      <a
        href={context.currentLanguage === 'english' ? EnglishPDF : FrenchPDF}
        download="Louis-Marie Lovichi CV.pdf"
      >
        {icon && (
          <Box>
            {icon}
            <Box component="span" sx={sxDownloadBottomIcon}></Box>
          </Box>
        )}
        <Typography component="h3">
          <DynamicText textId={text} />
        </Typography>
      </a>
    </Button>
  );
};
