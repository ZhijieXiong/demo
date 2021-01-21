// ----- DON'T MODIFY BELOW -----
import React from "react";

const ICON_URLS = {
  rt:
    "https://uploads.codesandbox.io/uploads/user/5f7bcfab-93b0-47d6-ab75-e5a4dd7d5661/z3-w-retweet.png",
  like:
    "https://uploads.codesandbox.io/uploads/user/5f7bcfab-93b0-47d6-ab75-e5a4dd7d5661/TAf_-heart.png",
  verified:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2000px-Twitter_Verified_Badge.svg.png"
};

const Icon = props => {
  const iconUrl = ICON_URLS[props.type];
  return <img src={iconUrl} height="17" width="17" />;
};

export default Icon;
// ----- DON'T MODIFY ABOVE -----
