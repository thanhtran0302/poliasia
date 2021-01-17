import styled from 'styled-components';
import colors from '../../constants/colors';
import paragraphs from '../../constants/paragraphs';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';

export const Layout = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-left: ${spaces[32]};
`;

export const FormContainer = styled.form`
  display: flex;

  button {
    margin-left: ${spaces[12]};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: ${spaces[12]};
`;

export const Title = styled.div`
  ${paragraphs.h1};
  margin-left: ${spaces[12]};
`;

export const Subtitle = styled.div`
  ${paragraphs.h2};
  margin: ${spaces[12]} 0;
`;

export const Description = styled.div`
  ${paragraphs.body1};
  max-width: 600px;
  margin-bottom: ${spaces[12]};
`;

export const RedSpanText = styled.span`
  color: ${colors.red};
  font-weight: 600;
`;

export const SvgContainer = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spaces[24]};
  border: 3px solid ${colors.red};
  border-radius: ${radius[6]};
  max-width: 400px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 100px;
  background: white;
`;

export const CardTitle = styled.div`
  ${paragraphs.body1};
  font-weight: 600;
  margin-bottom: ${spaces[12]};
`;
