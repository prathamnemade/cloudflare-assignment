import { Fragment } from "react";
import styled from "styled-components";

const Label = styled.label`
  font-size: 12px;
  line-height: 15px;
  color: var(--black-letters);
  margin: 5px 0;
  font-family: SF-Pro;
  font-weight: 700;
  margin-top: 20px;
`;

const TextArea = styled.textarea`
  border: none;
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 17px;
  line-height: 19px;
  resize: none;
  font-family: SF-Pro;
  font-weight: 500;
`;

const CustomTextarea = ({ label, name, ...rest }) => (
  <Fragment>
    <Label htmlFor={name}>{label}</Label>
    <TextArea id={name} name={name} {...rest} />
  </Fragment>
);

export default CustomTextarea;
