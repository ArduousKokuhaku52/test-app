interface IconHolder {
  children: string;
}

const SideBarIcon = ({ children }: IconHolder) => (
  <div>
    {children.endsWith(".svg") ? (
      <img src={children} className="app-sidebar-icon" />
    ) : (
      <div className="app-sidebar-text">{children.toUpperCase()}</div>
    )}
  </div>
);

export default SideBarIcon;
