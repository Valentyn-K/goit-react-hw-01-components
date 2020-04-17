import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Ul = styled.ul``;
const Li = styled.li`
  width: 200px;
  height: 70px;
  margin: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) => (props.isOnline ? "green" : "red")};
`;
const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  margin: 0 5px;
`;
const P = styled.p`
  margin: 0 5px;
`;

const FriendList = ({ friends }) => (
  <Ul>
    {friends.map(
      ({
        id,
        avatar = "https://img.washingtonpost.com/rf/image_1484w/WashingtonPost/Content/Blogs/comic-riffs/StandingArt/mr-burns-picture.jpg?uuid=7vD_Wu8DEeCE9vYhpZ5Sbg",
        name,
        isOnline = false,
      }) =>
        id && name ? (
          <Li key={id}>
            <Span isOnline={isOnline} />
            <Img src={avatar} alt={name + "avatar"} />
            <P>{name}</P>
          </Li>
        ) : (
          <></>
        )
    )}
  </Ul>
);

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      avatar: propTypes.string,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool,
    })
  ),
};

export default FriendList;
