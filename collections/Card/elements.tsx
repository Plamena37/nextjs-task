import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "../../components";

export const StyledContainer = styled(
  ({ height, bgColor, width, isselected, ...props }) => (
    <SectionContainer {...props} />
  )
)`
  padding: 1.2rem 1rem 0.3rem;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width};
  margin-left: 0;
  border-radius: 10px;
  border: ${({ isselected, theme }) =>
    isselected === "true" ? `3px solid ${theme.main}` : "none"};

  @media (max-width: 1300px) {
    width: ${({ width }) => `calc(${width} + 15%)`};
  }
  @media (max-width: 1025px) {
    width: ${({ width }) => width};
    margin-left: 20%;
  }
  @media (max-width: 650px) {
    width: 80%;
    margin-left: auto;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  display: inline;
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.2rem;
  font-weight: 700;
  border-bottom: ${({ isselected, theme }) =>
    isselected === "true" ? `2px solid ${theme.main}` : "none"};

  color: ${({ isselected, theme }) =>
    isselected === "true" ? theme.main : theme.black};
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-block: 0.4rem;

  & > p {
    margin: 0;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: ${({ theme }) => theme.black};
  width: 80%;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  padding: 1.8rem;

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;
