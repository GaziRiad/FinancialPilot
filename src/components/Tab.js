export function Tab({ name, onClick, selectedTab, children }) {
  return (
    <li
      className={selectedTab === name ? "tab-active" : ""}
      onClick={() => onClick(name)}
    >
      <span className="tab-icon">{children}</span>
      <span className="tab-name">{name}</span>
    </li>
  );
}
