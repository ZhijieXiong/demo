import React from "react";
import ProfileHeader from "./ProfileHeader";
import EngagementCounter from "./EngagementCounter";


function TweetRow({ tweet, onClick }) {
  return (
    <div className="tweet__row" onClick={onClick}>
      <ProfileHeader
        username={tweet.username}
        name={tweet.name}
        imageURL={tweet.imageURL}
        verified={tweet.verified}
      />
      <p>{tweet.tweet}</p>
      <EngagementCounter likes={tweet.likes} retweets={tweet.retweets} />
    </div>
  );
}

export default TweetRow;
