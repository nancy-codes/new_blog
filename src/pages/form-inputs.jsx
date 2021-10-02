import React from 'react';
import { Textarea, Input, Label } from 'theme-ui';
import * as Styled from '../templates/Contact/styles';

const LabeledInput = ({ as = Input, label, ...props }) => {
  const name = label.toLowerCase();
  return (
    <>
      <Label htmlFor={name} style={{ marginBottom: '10px' }}>
        {label}
      </Label>
      {as.render.name === 'Textarea' ? (
        <Styled.TextArea name={name} id={name} {...props} />
      ) : (
        <Styled.Input name={name} id={name} {...props} />
      )}
    </>
  );
};

const FormInput = ({ namePlaceholder, emailPlaceholder, ...props }) => (
  <>
    <LabeledInput label="Name" type="text" required placeholder={namePlaceholder} {...props} />
    <br />
    <LabeledInput label="Email" type="email" required placeholder={emailPlaceholder} {...props} />
    <br />
    <LabeledInput
      label="Message"
      as={Textarea}
      required
      minLength={10}
      rows={5}
      placeholder="Leave a message here"
      {...props}
    />
  </>
);

export default FormInput;
