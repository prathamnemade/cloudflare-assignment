import { useContext, useState } from "react";
import { UserContext } from "../../_services/context/userContext";
import { postServices } from "../../_services/posts";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CustomButtom from "../../components/customButton";
import CustomInput from "../../components/customInput";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const Form = styled.form`
  padding:30px;
  display: flex;
  flex-direction: column;
  background: #fee4d4;
  border-radius: 10px;
`;

const LandingPage = () => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [{ user }, dispatch] = useContext(UserContext);

  const changeHandler = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await postServices.getPosts().then((reponse) => {
      dispatch({
        type: "SET_USER_NAME",
        payload: username,
      });
      dispatch({
        type: "SET_POSTS_DATA",
        payload: reponse,
      });
      history.push("/post");
    });
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <CustomInput
          label="Enter UserName"
          name="username"
          type="text"
          onChange={changeHandler}
          placeholder="Enter here"
          value={username}
        />
        <CustomButtom type="submit">Let's Get In!</CustomButtom>
      </Form>
    </Wrapper>
  );
};

export default LandingPage;
