import React, { useState } from "react";

import clsx from "clsx";
import PropTypes from "prop-types";

import PlusImg from "../../assets/images/plus.png";
import "./ChatList.styled.scss";
import handleKeyDown, {
  handleKeyDownEnterOnly,
} from "../../utils/keyboardHandler";

const ChatList = ({
  classNames,
  list,
  itemClickHandler,
  selectedItem,
  handleSave,
  unreadCount = 0,
}) => {
  const wrappedClassNames = clsx("ui-chat-list-cont", classNames);

  const [showCreateInput, setShowCreateInput] = useState(false);
  const [newChatName, setNewChatName] = useState("");

  const handleItemClick = (item) => itemClickHandler(item);

  const isSelected = (item) => selectedItem && item.id === selectedItem.id;

  return (
    <div className={wrappedClassNames}>
      <div className="ui-chat-list-create">
        <div className="ui-chat-list-create-text">Explore chats</div>
        {!showCreateInput && (
          <div
            tabIndex={0}
            role="button"
            onKeyDown={(e) =>
              handleKeyDownEnterOnly(e, () => setShowCreateInput(true))
            }
            onClick={() => setShowCreateInput(true)}
            className="ui-chat-list-create-icon"
          >
            <img src={PlusImg} alt="create" />
            <div className="ui-chat-list-create-icon-text">Create</div>
          </div>
        )}
        {showCreateInput && (
          <div
            tabIndex={0}
            role="button"
            onKeyDown={(e) =>
              handleKeyDownEnterOnly(e, () => setShowCreateInput(false))
            }
            onClick={() => setShowCreateInput(false)}
            className="ui-chat-list-cancel"
          >
            <div className="ui-chat-list-create-icon-text">Cancel</div>
          </div>
        )}
      </div>
      {showCreateInput && (
        <div className="ui-chat-list-create-cont">
          <input
            placeholder="New chat name"
            name="newChat"
            onChange={({ target: { value } }) => setNewChatName(value)}
          />
          <div
            tabIndex={0}
            role="button"
            onKeyDown={(e) =>
              handleKeyDownEnterOnly(e, () =>
                handleSave(newChatName, () => setShowCreateInput(false)),
              )
            }
            onClick={() =>
              handleSave(newChatName, () => setShowCreateInput(false))
            }
            className="ui-chat-list-create-save-btn"
          >
            save
          </div>
        </div>
      )}
      <div className="ui-chat-list">
        {list.map((item) => (
          <div
            role="button"
            tabIndex="0"
            className={`ui-chat-list-item ${isSelected(item) && "selected"}`}
            key={item.id}
            onClick={() => handleItemClick(item)}
            onKeyDown={(e) => handleKeyDown(e, handleItemClick(item))}
          >
            <div className="ui-chat-list-title">{item.name}</div>
            {item.unreadCount > 0 && (
              <div className="ui-chat-list-unread">{item.unreadCount}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

ChatList.defaultProps = {
  classNames: "",
  list: [],
  selectedItem: null,
  itemClickHandler: undefined,
  handleSave: undefined,
};

ChatList.propTypes = {
  classNames: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  itemClickHandler: PropTypes.func,
  handleSave: PropTypes.func,
  unreadCount: PropTypes.number,
};

export default ChatList;
