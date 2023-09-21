import { SxProps, Theme } from '@mui/material';

export const sxEducationContentContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: '64px',
  marginTop: '24px',
};

export const sxEducationContentItemContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  paddingX: '12px',
};

export const sxEducationContentItemTitleContainer: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const sxEducationContentItemTitleContainerMedium: SxProps = {
  ...sxEducationContentItemTitleContainer,
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
};

export const sxEducationContentItemTitle: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontSize: (theme) => theme.typography.h6.fontSize,
  fontWeight: 600,
  fontFamily: (theme) => theme.typography.fontFamily,
};

export const sxEducationContentItemInfoContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  textAlign: 'right',
};

export const sxEducationContentItemInfoContainerIsMedium: SxProps = {
  ...sxEducationContentItemInfoContainer,
  textAlign: 'left',
  alignItems: 'flex-start',
};

export const sxEducationContentItemSubTitle: SxProps<Theme> = {
  color: (theme) => theme.palette.text.secondary,
  fontSize: (theme) => theme.typography.body2.fontSize,
  fontWeight: 600,
  fontStyle: 'italic',
  fontFamily: (theme) => theme.typography.fontFamily,
};

export const sxEducationContentItemInfo: SxProps<Theme> = {
  color: (theme) => theme.palette.text.secondary,
  fontSize: (theme) => theme.typography.body2.fontSize,
  fontWeight: 500,
  fontStyle: 'italic',
  fontFamily: (theme) => theme.typography.fontFamily,
};

export const sxEducationContentItemContentContainer: SxProps = {
  paddingLeft: '0px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

export const sxEducationContentItemContent: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontSize: (theme) => theme.typography.body1.fontSize,
  fontWeight: 500,
  fontFamily: (theme) => theme.typography.fontFamily,
};

export const sxEducationContentItemList: SxProps = {
  listStyleType: "'-'",
  padding: 'revert',
  paddingInlineStart: '16px',
};

export const sxEducationContentItemListItem: SxProps = {
  display: 'list-item',
};