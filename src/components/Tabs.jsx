export function Tabs(props) {
  const tabs = ["All", "Open", "Completed"];
  const { todoList, handleSelectTab } = props;

  return (
    <nav>
      {tabs.map((tab, tabIndex) => {
        const taskNum =
          tab === "All"
            ? todoList.length
            : tab === "Open"
            ? todoList.filter((val) => !val.complete).length
            : todoList.filter((val) => val.complete).length;
        return (
          <button
            style={{ border: "none", boxShadow: "none" }}
            key={tabIndex}
            className={
              "tab-button " + (tab === handleSelectTab) ? "tab-selected" : ""
            }
            onClick={(e) => {
              handleSelectTab(tab);
            }}
          >
            <h4>
              {tab} <span>({taskNum})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
