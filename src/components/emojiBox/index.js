import { useEffect, useState } from "react";
import styled from "styled-components";
import AddIcon from "../../images/add";
import Picker from "emoji-picker-react";

const Box = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  border: none;
  background: var(--light-orange);
  padding: 5px;
  cursor: pointer;
  margin: 0 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PickerContainer = styled.div`
  position: absolute;
  top: 39px;
  right: 0;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-family: SF-Pro;
  font-weight: 800;
`;

const EmojiBox = ({ onChangeEmojiPost, ...rest }) => {
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const onChangeEmoji = (event, emojiObject) => {
    setSelectedEmoji(emojiObject.emoji);
    setToggleEmoji(!toggleEmoji);
  };

  useEffect(() => {
    if (selectedEmoji) {
      onChangeEmojiPost(selectedEmoji);
    }
  }, [onChangeEmojiPost, selectedEmoji]);

  return (
    <Container>
      Select Emoji:
      <Box {...rest} onClick={() => setToggleEmoji(!toggleEmoji)}>
        {selectedEmoji ? selectedEmoji : <AddIcon />}
      </Box>
      {toggleEmoji && (
        <PickerContainer>
          <Picker onEmojiClick={onChangeEmoji} disableSkinTonePicker={true} />
        </PickerContainer>
      )}
    </Container>
  );
};

export default EmojiBox;
