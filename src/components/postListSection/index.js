import { Fragment, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../_services/context/userContext";
import CustomTag from "../customTag";

const PostContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 50%;
  background: var(--lightest-gray);
  margin: 15px 0;
  position: relative;
`;

const Title = styled.div`
  font-family: SF-Pro;
  font-size: 21px;
  line-height: 25px;
  font-weight: 900;
  margin: 5px 0;
`;

const Content = styled.div`
  font-family: SF-Pro;
  font-size: 21px;
  line-height: 25px;
  font-weight: 500;
  margin: 5px 0;
`;

const Emoji = styled.div`
  text-align: right;
  font-size: 30px;
  position: absolute;
  right: -20px;
  top: -20px;
`;
const DateContainer = styled.div`
  text-align: right;
  font-family: SF-Pro;
  font-size: 15px;
  line-height: 19px;
  font-weight: 400;
`;

const PostListSection = () => {
  const [user] = useContext(UserContext);
  return (
    <Fragment>
      {Object.keys(user.postsData).map((key, index) => {
        var date = new Date(user.postsData[key]?.createdAt);
        const postedDate =
          (date.getMonth() > 8
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)) +
          "/" +
          (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
          "/" +
          date.getFullYear() +
          " " +
          date.getHours() +
          ":" +
          date.getMinutes() +
          ":" +
          date.getSeconds();
        return (
          <PostContainer key={"post" + index}>
            <CustomTag>{user.postsData[key]?.username}</CustomTag>
            <Emoji>{user.postsData[key]?.emoji}</Emoji>
            <Title>{user.postsData[key]?.title}</Title>
            <Content>{user.postsData[key]?.content}</Content>
            <DateContainer>{postedDate}</DateContainer>
          </PostContainer>
        );
      })}
    </Fragment>
  );
};

export default PostListSection;
