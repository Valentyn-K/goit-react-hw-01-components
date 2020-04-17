import React from "react";
import propTypes from "prop-types";
import styles from "./App.module.css";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import user from "../../data-json/user.json";
import statisticalData from "../../data-json/statistical-data.json";
import friends from "../../data-json/friends.json";
import transactions from "../../data-json/transactions.json";

const App = () => (
  <div className={styles.container}>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

App.propTypes = {
  children: propTypes.array,
};

export default App;
