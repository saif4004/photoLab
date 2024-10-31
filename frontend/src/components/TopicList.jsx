import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = (props) => {

  const parsedData = props.userTopics.map((data) => (
    <TopicListItem key = {data.id} {...data} />
  ));
  return (
    <div className="top-nav-bar__topic-list">
      {parsedData}
    </div>
  );
};

export default TopicList;
