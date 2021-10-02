import React from 'react';
import Button from 'components/ui/Button';
import * as Styled from './styles';

const FormControls = () => (
  <Styled.ButtonContainer>
    <Button primary type="submit">Send message</Button>
  </Styled.ButtonContainer>
);

export default FormControls;
