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
import { AgencyProps } from "../../utils/interfaces";

// type AgencyProps = {
//   title: string;
//   subTitle;
//   bgImage;
//   videoImg;
//   cards;
// };

export const Agency = ({
  title,
  subTitle,
  bgImage,
  videoImg,
  cards,
}: AgencyProps) => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubheading>{subTitle}</StyledSubheading>
      </StyledTextContainer>

      <StyledContentContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={videoImg.src}
            alt={videoImg.alt}
            width={videoImg.width}
            height={videoImg.height}
          />
        </StyledImageContainer>
        <StyledCardContainer>
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </StyledCardContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};
