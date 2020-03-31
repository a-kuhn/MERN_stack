import React, { useState } from "react";

const Tabs = props => {
  const [tabsState, setTabsState] = useState([
    { label: 1, content: "Tab 1 content" },
    { label: 2, content: "Tab 2 content" },
    { label: 3, content: "Tab 3 content" },
    { label: 4, content: "Tab 4 content" }
  ]);
  const [displayState, setDisplayState] = useState(1);

  const onClickHandler = (e, id) => {
    e.preventDefault();
    const newDisplayState = id;
    setDisplayState(newDisplayState);
  };

  return (
    <div>
      {/* map over array of tabs*/}
      {tabsState.map(tab => (
        <button key={tab.label} onClick={e => onClickHandler(e, tab.label)}>
          Tab {tab.label}
        </button>
      ))}
      {/* use filter to display content of currently-selected tab */}
      <p>{tabsState.filter(tab => tab.label === displayState)[0].content}</p>
    </div>
  );
};

export default Tabs;
