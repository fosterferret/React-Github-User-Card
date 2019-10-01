import React from "react";
import FollowerCard from "./FollowerCard";

export default function Followers({ followers }) {
  return (
    <>
      {followers.map((follower, index) => (
        <FollowerCard follower={follower} key={index + 1} />
      ))}
    </>
  );
}
