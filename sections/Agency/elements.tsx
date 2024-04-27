import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "../../components";

export const StyledContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  flex-direction: column;
  margin-block: 6rem;
  background-image: url("img/background.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: 87%;

  @media (max-width: 1024px) {
    background: none;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 20px 0 0 0;
  color: ${({ theme }) => theme.black};
  font-size: 3.5rem;

  @media (max-width: 1024px) {
    font-size: 3.1rem;
  }
`;

export const StyledSubheading = styled((props) => (
  <SectionSubheading {...props} />
))`
  font-family: inherit;
  text-align: center;
  font-size: 1.6rem;
  margin-top: 0.8rem;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: ${({ theme }) => theme.black};
  font-family: sans-serif;
  text-align: center;
`;

export const StyledContentContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  align-items: center;
  margin-block: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 100%;
  width: 360px;
  height: 100%;
  justify-self: end;
  align-content: center;
  margin-block: auto;

  @media (max-width: 1024px) {
    justify-self: center;
  }
`;

export const StyledCardContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 1024px) {
    justify-self: center;
    gap: 1rem;
    margin-top: 2.5rem;
  }
`;
