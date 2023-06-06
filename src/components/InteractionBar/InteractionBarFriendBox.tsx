interface Info {
  name: string;
  icon?: string;
  description?: string;
  status?: userStatus;
}

enum userStatus {
  ONLINE,
  BUSY,
  DND,
  OFFLINE,
}

const InteractionBarFriendBox = ({ name, icon, description }: Info) => {
  return <div className="app-friendbox">{name}</div>;
};

export default InteractionBarFriendBox;
