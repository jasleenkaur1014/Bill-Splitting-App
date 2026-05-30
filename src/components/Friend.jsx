import Button from "./Button";
export default function Friend(props) {
  const { data } = props;
  return (
    <li>
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      <p
        className={
          data.balance < 0 ? "red" : data.balance > 0 ? "green" : "even"
        }
      >
        {data.balance < 0
          ? `You owe ${data.name} ₹${Math.abs(data.balance)}`
          : data.balance == 0
            ? `You and ${data.name} are even.`
            : `${data.name} owes you ₹${data.balance}`}
      </p>

      <Button
        onClick={() => {
          props.setBillFormOpen(true);
          props.setWhichFriend(data.id);
        }}
      >
        Select
      </Button>

      {/* red, green and neutral logic for balance */}
    </li>
  );
}
