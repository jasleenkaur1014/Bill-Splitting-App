import { useState } from "react";
import Button from "./Button";
export default function AddFriendForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  return (
    <form className="form-add-friend" onSubmit={(e) => e.preventDefault()}>
      <label>👀Friend Name</label>
      <input
        type="text"
        name="friendName"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label>🌅Image URL</label>
      <input
        type="text"
        name="friendImage"
        value={image}
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          const newFriend = {
            id: Math.floor(100000 + Math.random() * 900000),
            name: name,
            image: image,
            balance: 0,
          };
          props.setFriends([...props.friends, newFriend]);
          setImage("");
          setName("");
        }}
      >
        Add
      </Button>
    </form>
  );
}
