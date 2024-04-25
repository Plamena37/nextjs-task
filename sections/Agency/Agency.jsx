import Image from "next/image";

import { Card } from "../../collections";

import {
  StyledContainer,
  StyledTitle,
  StyledSubheading,
  StyledTextContainer,
  StyledImageContainer,
  StyledCardContainer,
  StyledContentContainer,
} from "./elements";

export const Agency = ({
  title,
  subTitle,
  bgImage,
  videoImg,
  cards,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubheading>{subTitle}</StyledSubheading>
      </StyledTextContainer>

      <StyledContentContainer {...props}>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={videoImg.src}
            alt={videoImg.alt}
            width={videoImg.width}
            height={videoImg.height}
          />
        </StyledImageContainer>
        <StyledCardContainer {...props}>
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </StyledCardContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};
