import React, { useState } from "react";
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import { initialFriends } from "./data";
import SplitBillForm from "./components/SplitBillForm";
const App = () => {
  const [isAddFormOpen, setAddFormOpen] = useState(false);
  const [isBillFormOpen, setBillFormOpen] = useState(false);
  const [whichFriend, setWhichFriend] = useState("");
  const [friends, setFriends] = useState(initialFriends);

  const handleSplitBill = (amount) => {
    const updated = friends.map((item) => {
      if (item.id === whichFriend) {
        return { ...item, balance: item.balance + amount };
      }
      return item;
    });

    setFriends(updated);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          setBillFormOpen={setBillFormOpen}
          setWhichFriend={setWhichFriend}
        />
        {isAddFormOpen && (
          <AddFriendForm friends={friends} setFriends={setFriends} />
        )}
        <Button
          onClick={() => {
            setAddFormOpen((prev) => !prev);
          }}
        >
          {isAddFormOpen ? "Close" : "Add"}
        </Button>
      </div>
      {isBillFormOpen && (
        <SplitBillForm
          setBillFormOpen={setBillFormOpen}
          whichFriend={whichFriend}
          friends={friends}
          handleSplitBill={handleSplitBill}
          setWhichFriend={setWhichFriend}
        />
      )}
    </div>
  );
};

export default App;
