import Image from "next/image";

import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledTextContainer,
  StyledImageContainer,
} from "./elements";
import { Card as CardProps } from "../../utils/interfaces";

type Props = {
  card: CardProps;
};

export const Card = ({ card }: Props) => {
  const { image, title, description, bgColor, width } = card;

  return (
    <StyledContainer bgColor={bgColor} width={width}>
      <StyledImageContainer>
        <Image alt="Icon" {...image} />
      </StyledImageContainer>

      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default Card;
