import React from "react";

function User({ user }) {
  return (
    <div class="card">
      <img src={user.avatar_url} />
      <div class="card-info">
        <h3 className="name">{user.name}</h3>
        <p className="username">{user.login}</p>
        <p>{user.location}</p>
        <p>Profile: <a href="{user.html_url}">{user.html_url}</a></p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}

export default User;
