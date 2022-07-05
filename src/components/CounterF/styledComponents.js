import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  border: solid 1px red;
  border-radius: 0.5em;
  padding: 1em;
`;

export const PersonFStyled = styled.section`
  margin: 1em;
  padding: 1em;
  border: solid 1px ${props => props.color};
  border-radius: 0.5em;

  @media (max-width: 429px) {
    background: ${props => props.color};
  }
`;