import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "../../components";

export const StyledContainer = styled(
  ({ height, bgColor, width, isSelected, ...props }) => (
    <SectionContainer {...props} />
  )
)`
  padding: 1rem 1rem 0.3rem;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width};
  margin-left: 0;
  border-radius: 10px;
  border: ${({ isSelected, theme }) =>
    isSelected ? `3px solid ${theme.main}` : "none"};

  @media (max-width: 1350px) {
    width: 80%;
    margin-left: auto;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  display: inline;
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.2rem;
  border-bottom: ${({ isSelected, theme }) =>
    isSelected ? `2px solid ${theme.main}` : "none"};

  color: ${({ isSelected, theme }) => (isSelected ? theme.main : theme.black)};

  ${({ titleStyleProps }) => titleStyleProps}
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: ${({ theme }) => theme.black};
  width: 80%;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  padding: 2rem;
`;
