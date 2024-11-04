import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const handleClick = () => {
    props.onTopicClick(props.id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <h1 className="top-nav-bar__topic-list">{props.title}</h1>
    </div>
  );
};

export default TopicListItem;
