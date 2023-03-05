import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  padding: 0 16px 16px;
  border-bottom: 1px solid black;
`;
Section.displayName = 'Section';

export const SectionInfo = styled.section`
  padding: 0 16px 5px;
  border-bottom: 1px solid black;
`;
SectionInfo.displayName = 'SectionInfo';

export const Img = styled.img`
  max-width: 250px;
  height: 375px;
`;
Img.displayName = 'Img';

export const ImgMiniature = styled.img`
  max-width: 250px;
  height: 250px;
`;
ImgMiniature.displayName = 'ImgMiniature';

export const Box = styled.div`
  margin-left: 25px;
`;
Box.displayName = 'Box';

export const LinkItem = styled(Link)`
  display: inline-block;
  padding: 0 0 16px;

  text-decoration: none;
  color: black;
  font-weight: 500;

  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;
LinkItem.displayName = 'Link';
