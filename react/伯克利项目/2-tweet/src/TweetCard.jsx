import React from "react";
import Icon from "./Icon";
import ProfileHeader from "./ProfileHeader";
import EngagementCounter from "./EngagementCounter";

const TweetCard = props => {
  //render verified icon
  function renderVerified() {
    //TODO (TASK 1): render icon only if user is verified.
    //Call this function in renderHeader().
    if (props.tweet.verified) {
      return <Icon type={"verified"} />;
    } else {
      return null;
    }
  }

  //Header should contain avatar, name, username, and verified.
  function renderHeader() {
    //TODO (TASK 1): REPLACE ALL CAPS
    //1. Pass in avatar link as props for Image component.
    //2. Render the name and verified icon in the <h3> tags.
    //3. Render username.
    return (
      <div className="header">
        <img src={props.tweet.imageURL} />
        <div>
          <h3>
            {props.tweet.name} {renderVerified()}
          </h3>
          <div className="subtext">{props.tweet.username}</div>
        </div>
      </div>
    );
  }

  //Body should contain tweet and timestamp.
  function renderBody() {
    //TODO (TASK 2): REPLACE ALL CAPS
    return (
      <div>
        <h2>{props.tweet.tweet}</h2>
        <div className="subtext">{props.tweet.timestamp}</div>
      </div>
    );
  }

  //Numbers should contain number of retweets and number of likes.
  function renderNumbers() {
    //TODO (TASK 3): Add retweets and likes in here!
    return (
      <div className="numbers">
          <h3>{props.tweet.retweets} Retweets  {props.tweet.likes} Likes</h3>
      </div>
    );
  }

  //Rounds a number to the nearest thousand.
  function roundToNearestThousand(value) {
    if (value > 1000) {
      return (value/1000).toFixed(1).toString() + "k";
    } else {
      return value.toString();
    }
  }

  //Summary should contain number of retweets and number of likes.
  function renderSummary() {
    //TODO (TASK 4): Render Retweets and Likes
    return (
      <div className="summary">
        <div className="subtext">
          <Icon type={"rt"} />
          {roundToNearestThousand(props.tweet.retweets)}
        </div>
        <div className="subtext">
          <Icon type={"like"} />
          {roundToNearestThousand(props.tweet.likes)}
        </div>
      </div>
    );
  }

  // ----- DON'T MODIFY BELOW -----
  return (
    <div className="App">
      <div className="top">
        {/* 标头Header：Avatar 头像，名称，用户名，已验证图标 */}
        {/* {renderHeader()}  这是第一步时渲染的方法 */}
        <ProfileHeader 
        name={props.tweet.name} 
        username={props.tweet.username} 
        imageURL={props.tweet.imageURL} 
        verified={props.tweet.verified} 
        />
        <img
          src="https://uploads.codesandbox.io/uploads/user/5f7bcfab-93b0-47d6-ab75-e5a4dd7d5661/UxP3-follow.png"
          height="45px"
        />
      </div>
      {/* 正文Body：推文，时间戳 */}
      {renderBody()}  
      <hr />
      {/* 统计Stats，数字Numbers：Retweets（转推），Likes（点赞） */}
      {renderNumbers()}  
      <hr />
      {/* 摘要Summary：使用与Stats、Numbers相同的特征 */}
      {/* {renderSummary()}   这是第一步时渲染的方法 */}
      <EngagementCounter 
      retweets={props.tweet.retweets} 
      likes={props.tweet.likes} 
      />
    </div>
  );
};

export default TweetCard;
// ----- DON'T MODIFY ABOVE -----
