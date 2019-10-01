import React from "react";

function FollowerCard({ follower }) {
  const { avatar_url, login } = follower;
  return (
    <div className="card">
      <img src={avatar_url} />
      <div>{login}</div>
    </div>
  );
}

export default FollowerCard;
