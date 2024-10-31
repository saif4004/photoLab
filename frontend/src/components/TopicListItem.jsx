import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {

  return (
    <div className="topic-list__item">
      <h1 className="top-nav-bar__topic-list">{props.title}</h1>
    </div>
  );
};

export default TopicListItem;
