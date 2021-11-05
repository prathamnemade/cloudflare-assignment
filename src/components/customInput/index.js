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

const Input = styled.input`
  border: none;
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 17px;
  line-height: 19px;
  font-family: SF-Pro;
  font-weight: 500;
`;

const CustomInput = ({ label, name, ...rest }) => (
  <Fragment>
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} name={name} {...rest} />
  </Fragment>
);

export default CustomInput;
