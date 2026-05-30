import Friend from "./Friend";

export default function FriendsList(props) {
  return (
    <ul style={{ listStyle: "none" }}>
      {props.friends.map((item) => (
        <Friend
          key={item.id}
          data={item}
          setBillFormOpen={props.setBillFormOpen}
          setWhichFriend={props.setWhichFriend}
        />
      ))}
    </ul>
  );
}
