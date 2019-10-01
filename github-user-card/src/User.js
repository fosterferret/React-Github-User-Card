import React from "react";
import GitHubCalendar from "github-calendar";

export default function User({ user }) {
  const {
    name,
    avatar_url,
    login,
    location,
    followers,
    following,
    bio,
    html_url
  } = user;

  const toggleData = event => {
    event.target.parentElement.classList.toggle("more-details");
  };

  return (
    <div className="card" data-id={login}>
      <img src={avatar_url} />
      <div className="card-info">
        <h3 className="name">{name}</h3>
        <p className="username">{login}</p>
        <p>{location}</p>
        <p>
          Profile: <a href="{html_url}">{html_url}</a>
        </p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>{bio}</p>
      </div>
      <div className="calendar"></div>
      <button onClick={toggleData}>Show more</button>
    </div>
  );
}
