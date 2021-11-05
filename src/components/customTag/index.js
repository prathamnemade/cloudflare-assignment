import styled from "styled-components";

const Box = styled.div`
  padding: 5px 20px;
  font-size: 15px;
  line-height: 19px;
  font-family: SF-Pro;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: var(--brightest-orange);
  width: fit-content;
`;

const CustomTag = ({ children }) => <Box>{children}</Box>;

export default CustomTag;
