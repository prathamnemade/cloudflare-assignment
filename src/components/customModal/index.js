import React from "react";
import styled from "styled-components";
import { CloseModalIcon } from "../../images/closeModalIcon";

const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  backdrop-filter: blur(1px);
  background-color: rgba(40, 40, 40, 0.75);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalInnerWrapperProfile = styled.div`
  width: fit-content;
  max-width: 90vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0px 0px 20px rgba(170, 167, 178, 0.3);
  border: solid 0.5px #eaedf3;
  background-color: #ffffff;
  padding: 20px 20px 20px 20px;
  overflow: hidden;
  overflow: scroll;
  height: max-content;
  max-height: 90vh;
`;
const CloseBox = styled.span`
  :hover {
    cursor: pointer;
  }
`;
const CloseContainer = styled.div`
  text-align: right;
`;
const Modal = (props) =>
  props.show && (
    <ModalWrapper>
      <ModalInnerWrapperProfile>
        <CloseContainer>
          <CloseBox onClick={props.close}>
            <CloseModalIcon />
          </CloseBox>
        </CloseContainer>
        {props.children}
      </ModalInnerWrapperProfile>
    </ModalWrapper>
  );
export { Modal };
