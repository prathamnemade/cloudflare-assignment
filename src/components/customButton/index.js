import styled from "styled-components";

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background: var(--light-orange);
  color: var(--brightest-orange);
  font-size: 13px;
  line-height: 15px;
  font-weight: 900;
  border: none;
  margin: 10px 0;
  cursor: pointer;
  width: fit-content;
`;

const CustomButtom = ({ children, ...rest }) => (
  <Button {...rest} type="text">
    {children}
  </Button>
);

export default CustomButtom;
