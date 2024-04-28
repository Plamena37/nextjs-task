import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "../../components";

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  display: inline;
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.2rem;
  font-weight: 700;
`;

export const StyledContainer = styled(
  ({ height, bgColor, width, ...props }) => <SectionContainer {...props} />
)`
  padding: 1.2rem 1rem 0.3rem;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width};
  margin-left: 0;
  border-radius: 10px;

  &:hover {
    outline: ${({ theme }) => `3px solid ${theme.main}`};

    ${StyledTitle} {
      color: ${({ theme }) => theme.main};
      border-bottom: ${({ theme }) => `2px solid ${theme.main}`};
    }
  }

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
    padding: 1.2rem 0.5rem 0.3rem;
  }
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

  @media (max-width: 650px) {
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.3rem;
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
    width: 3.5rem;
  }
`;
