import { Box, List, ListItem, Typography } from '@mui/material';
import { useThemeMediaQuery } from '../../utils/hooks/useThemeMediaQuery';
import { DynamicText } from '../DynamicText/DynamicText';
import {
  ContentType,
  EducationContentProps,
  ItemContent,
  ItemTypes,
} from './EducationContent.models';
import {
  sxEducationContentContainer,
  sxEducationContentItemContainer,
  sxEducationContentItemContent,
  sxEducationContentItemContentContainer,
  sxEducationContentItemInfo,
  sxEducationContentItemInfoContainer,
  sxEducationContentItemInfoContainerIsMedium,
  sxEducationContentItemList,
  sxEducationContentItemListItem,
  sxEducationContentItemSubTitle,
  sxEducationContentItemTitle,
  sxEducationContentItemTitleContainer,
  sxEducationContentItemTitleContainerMedium,
} from './EducationContent.styles';

export const isContentText = (
  content: ItemTypes,
  type: ContentType,
): content is string => {
  return type === ContentType.TEXT;
};

export const isContentList = (
  content: ItemTypes,
  type: ContentType,
): content is string[] => {
  return type === ContentType.LIST;
};

export const ExperienceContent = (props: EducationContentProps) => {
  const { educations } = props;

  const { isSmall, isMedium } = useThemeMediaQuery();

  return (
    <Box sx={sxEducationContentContainer}>
      {educations.map((element, index) => {
        return (
          <Box key={index} sx={sxEducationContentItemContainer}>
            <Box
              sx={
                isSmall || isMedium
                  ? sxEducationContentItemTitleContainerMedium
                  : sxEducationContentItemTitleContainer
              }
            >
              <Typography component="div" sx={sxEducationContentItemTitle}>
                <DynamicText textId={element.title ?? ''} />
              </Typography>
              <Box
                sx={
                  isSmall || isMedium
                    ? sxEducationContentItemInfoContainerIsMedium
                    : sxEducationContentItemInfoContainer
                }
              >
                <Typography
                  component="div"
                  sx={sxEducationContentItemSubTitle}
                >
                  <DynamicText textId={element.subTitle ?? ''} />
                </Typography>
                <Typography component="div" sx={sxEducationContentItemInfo}>
                  <DynamicText textId={element.info ?? ''} />
                </Typography>
              </Box>
            </Box>
            <Box sx={sxEducationContentItemContentContainer}>
              {element?.content?.map(
                (contentItem: ItemContent, contentItemIndex) => {
                  if (isContentText(contentItem.content, contentItem.type)) {
                    return (
                      <Typography
                        key={contentItemIndex}
                        component="p"
                        sx={sxEducationContentItemContent}
                      >
                        <DynamicText textId={contentItem.content ?? ''} />
                      </Typography>
                    );
                  } else if (
                    isContentList(contentItem.content, contentItem.type)
                  ) {
                    return (
                      <List
                        key={contentItemIndex}
                        sx={sxEducationContentItemList}
                      >
                        {contentItem.content.map((listItem, index) => (
                          <ListItem
                            key={index}
                            sx={sxEducationContentItemListItem}
                          >
                            <DynamicText textId={listItem ?? ''} />
                          </ListItem>
                        ))}
                      </List>
                    );
                  } else {
                    return <></>;
                  }
                },
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};