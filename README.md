# Bill Splitting App

A React application for managing shared expenses between friends. Users can add friends, select a friend, split bills, and automatically track balances in real time.

---

## Features

### Friend Management

- View a list of friends
- Add new friends dynamically
- Display friend profile images
- Generate unique IDs for newly added friends

### Balance Tracking

- Positive balance → Friend owes you
- Negative balance → You owe friend
- Zero balance → You and your friend are even

### Bill Splitting

- Select a friend to split a bill with
- Enter total bill amount
- Enter your contribution
- Automatically calculate friend's contribution
- Choose who paid the bill
- Update balances instantly
- Support multiple consecutive bill splits

### Dynamic UI

- Toggle Add Friend form visibility
- Conditional styling based on balance status
- Controlled form inputs using React state

---

## Tech Stack

- React
- JavaScript (ES6+)
- CSS
- JSX

---

## Project Structure

```text
src/
│
├── components/
│   ├── AddFriendForm.jsx
│   ├── Button.jsx
│   ├── Friend.jsx
│   ├── FriendsList.jsx
│   └── SplitBillForm.jsx
│
├── data.js
├── App.jsx
└── index.js
```

---

## How It Works

### Adding a Friend

1. Click the **Add Friend** button.
2. Enter:
   - Friend Name
   - Image URL

3. Click **Add**.
4. The friend is added to the sidebar with an initial balance of ₹0.

### Splitting a Bill

1. Select a friend.
2. Enter:
   - Total bill amount
   - Your expense

3. Friend's expense is calculated automatically.
4. Choose who paid the bill.
5. Click **Split Bill**.
6. The balance updates instantly.

---

## Balance Logic

### If You Paid

```text
Balance += Friend's Expense
```

### If Friend Paid

```text
Balance -= Your Expense
```

### Examples

#### Example 1

```text
Bill Value: ₹100
Your Expense: ₹20
Friend Expense: ₹80
Paid By: You
```

Result:

```text
Friend owes you ₹80
```

#### Example 2

```text
Bill Value: ₹100
Your Expense: ₹20
Friend Expense: ₹80
Paid By: Friend
```

Result:

```text
You owe friend ₹20
```

---

## State Management

### App Component

```javascript
friends;
isAddFormOpen;
isBillFormOpen;
whichFriend;
```

### SplitBillForm Component

```javascript
billValue;
yourExpenses;
whoIsPaying;
```

### AddFriendForm Component

```javascript
name;
image;
```

---

## Learning Outcomes

- React Components
- Props
- State Management with useState
- Controlled Forms
- Conditional Rendering
- Array Mapping
- Immutable State Updates
- Event Handling
- Lifting State Up
- Dynamic UI Updates

---

## Future Improvements

- Edit friend details
- Delete friends
- Local storage persistence
- Form validation
- Responsive design
- Dark mode support

---

## Author

Jasleen
