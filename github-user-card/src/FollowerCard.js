import React from "react";

function User({ follower }) {
  return (
    <div class="card">
      <img src={follower.avatar_url} />
      <div class="card-info">
        <p className="username">{follower.login}</p>
        <p>
          Profile: <a href="{follower.html_url}">{follower.html_url}</a>
        </p>
      </div>
    </div>
  );
}

export default User;
