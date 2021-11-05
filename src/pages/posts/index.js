import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import PostingSection from "../../components/postingSection";
import { UserContext } from "../../_services/context/userContext";
import PostListSection from "../../components/postListSection";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display:flex:
  align-items:center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Posts = () => {
  let history = useHistory();
  const [user] = useContext(UserContext);

  useEffect(() => {
    if (!user?.userName) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <Wrapper>
      <Container>
        <PostingSection />
        <PostListSection />
      </Container>
    </Wrapper>
  );
};

export default Posts;
