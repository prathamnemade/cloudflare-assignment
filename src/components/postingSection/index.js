import { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import RefreshIcon from "../../images/refresh";
import { UserContext } from "../../_services/context/userContext";
import { postServices } from "../../_services/posts";
import CustomButtom from "../customButton";
import CustomInput from "../customInput";
import { Modal } from "../customModal";
import CustomTag from "../customTag";
import CustomTextarea from "../customTextarea";
import EmojiBox from "../emojiBox";

const FormContainer = styled.form`
  background: var(--lightest-orange);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: 50px 0;
`;
const FeelingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const RefreshContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightest-orange);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  font-size: 21px;
  font-family: SF-Pro;
  font-weight: 800;
`;

const PostingSection = () => {
  const [user, dispatch] = useContext(UserContext);
  const [successModal, setSuccessModal] = useState(false);
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [postForm, setPostForm] = useState({
    title: "",
    content: "",
    emoji: null,
    username: user?.userName || "",
  });

  const resetMe = () => {
    setPostForm({
      title: "",
      content: "",
      emoji: null,
      username: user?.userName || "",
    });
  };
  const changeHandler = (event) => {
    const { value, name } = event.target;
    setPostForm({ ...postForm, ...{ [name]: value } });
  };

  const onEmojiClick = (emojiObject) => {
    setPostForm({ ...postForm, ...{ emoji: emojiObject } });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const body = {
      title: postForm.title,
      username: postForm.username,
      content: postForm.content,
      emoji: postForm.emoji,
    };
    await postServices
      .createPost(JSON.stringify(body))
      .then((response) => {
        resetMe();
        setModalMessage("Success!!");
        setSuccessModal(true);
      })
      .catch((err) => {
        setModalMessage("Something went wrong!");
        setSuccessModal(true);
      });
  };

  const updatePosts = async () => {
    await postServices
      .getPosts()
      .then((reponse) => {
        dispatch({
          type: "SET_POSTS_DATA",
          payload: reponse,
        });
        setModalMessage("Refresh done!");
        setSuccessModal(true);
      })
      .catch((err) => {
        setModalMessage("Something went wrong!");
        setSuccessModal(true);
      });
  };

  return (
    <Fragment>
      <FormContainer onSubmit={onSubmitHandler}>
        <CustomTag>{user?.userName}</CustomTag>
        <FeelingContainer onClick={() => setToggleEmoji(!toggleEmoji)}>
          <EmojiBox onChangeEmojiPost={onEmojiClick} />
        </FeelingContainer>
        <CustomInput
          label="Title"
          name="title"
          type="text"
          onChange={changeHandler}
          placeholder="Enter title"
          value={postForm.title}
        />
        <CustomTextarea
          label="Content"
          name="content"
          type="text"
          onChange={changeHandler}
          placeholder="Enter content"
          value={postForm.content}
          rows="7"
        />
        <CustomButtom type="submit">Let's Post!</CustomButtom>
      </FormContainer>
      <RefreshContainer onClick={updatePosts}>
        <RefreshIcon />
      </RefreshContainer>
      <Modal show={successModal} close={() => setSuccessModal(false)}>
        <ModalContainer>{modalMessage}</ModalContainer>
      </Modal>
    </Fragment>
  );
};

export default PostingSection;
