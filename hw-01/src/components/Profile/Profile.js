import React from "react";
import propTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({
  name = "Ivanov Ivan Ivanych",
  tag = "",
  location = "",
  avatar = "https://img.washingtonpost.com/rf/image_1484w/WashingtonPost/Content/Blogs/comic-riffs/StandingArt/mr-burns-picture.jpg?uuid=7vD_Wu8DEeCE9vYhpZ5Sbg",
  followers = 0,
  views = 0,
  likes = 0,
}) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt={name + "avatar"} className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{"@" + tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  followers: propTypes.number,
  views: propTypes.number,
  likes: propTypes.number,
};

export default Profile;
