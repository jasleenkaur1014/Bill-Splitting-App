import { useState } from "react";
import Button from "./Button";
export default function SplitBillForm(props) {
  const friend = props.friends.find((item) => item.id == props.whichFriend);

  const [whoIsPaying, setPayer] = useState("");
  const [billValue, setBillValue] = useState(0);
  const [yourExpenses, setYourExpenses] = useState(0);

  return (
    <form className="form-split-bill" onSubmit={(e) => e.preventDefault()}>
      <h2>Split a bill with friend</h2>

      <label>💰 Bill Value</label>
      <input
        name="billValue"
        type="number"
        value={billValue}
        onChange={(e) => {
          setBillValue(e.target.value);
        }}
      />

      <label>🙎🏻‍♂️Your expenses</label>
      <input
        type="number"
        name="yourExpenses"
        value={yourExpenses}
        onChange={(e) => setYourExpenses(e.target.value)}
      />

      <label>🙍🏼‍♂️ Friend's expense</label>
      <input
        type="number"
        name="friendExpense"
        value={billValue - yourExpenses}
        readOnly
      />

      <label>💰 Who is paying the bill?</label>
      <select
        name="personSelect"
        onChange={(e) => setPayer(e.target.value)}
        value={whoIsPaying}
      >
        <option value="You">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>

      <Button
        onClick={() => {
          const balance =
            whoIsPaying === "You" ? billValue - yourExpenses : -yourExpenses;
          props.handleSplitBill(balance);
          props.setBillFormOpen(false);
          props.setWhichFriend("");
        }}
      >
        Split bill
      </Button>
    </form>
  );
}
