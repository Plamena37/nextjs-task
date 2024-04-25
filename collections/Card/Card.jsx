import Image from "next/image";

import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledTextContainer,
  StyledImageContainer,
} from "./elements";

export const Card = ({ card, ...props }) => {
  const { image, title, description, bgColor, width, isSelected } = card;

  return (
    <StyledContainer
      bgColor={bgColor}
      isSelected={isSelected}
      width={width}
      {...props}
    >
      <StyledImageContainer>
        <Image alt="Icon" {...image} />
      </StyledImageContainer>

      <StyledTextContainer>
        <StyledTitle isSelected={isSelected}>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default Card;
