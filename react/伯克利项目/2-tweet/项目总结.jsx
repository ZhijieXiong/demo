// 1、不会复用的组件可以就在父组件内部实现，如下:
// TweetCard内部有四部分：Header、Body、Numbers、Summary
// 但是只有Header和Summary在其它地方有复用，所以只把这两个部分抽出去作为一个单独的组件，而Body和Numbers
// 直接在Tweetcard组件内部实现
const TweetCard = props => {

  function renderBody() {
    return (
      <div>
        <h2>{props.tweet.tweet}</h2>
        <div className="subtext">{props.tweet.timestamp}</div>
      </div>
    );
  }

  function renderNumbers() {
    return (
      <div className="numbers">
          <h3>{props.tweet.retweets} Retweets  {props.tweet.likes} Likes</h3>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="top">
        <ProfileHeader  {/* 标头Header：Avatar 头像，名称，用户名，已验证图标 */}
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
      {renderBody()}  {/* 正文Body：推文，时间戳 */}
      <hr />
      {renderNumbers()}  {/* 统计Stats，数字Numbers：Retweets（转推），Likes（点赞） */}
      <hr />
      <EngagementCounter  {/* 摘要Summary：使用与Stats、Numbers相同的特征 */}
      retweets={props.tweet.retweets} 
      likes={props.tweet.likes} 
      />
    </div>
  );
};



// 2、高阶组件：如果一个组件内部有比较复杂的逻辑处理，可以把逻辑处理与视图显示分离，如下
// App组件内部有比较复杂的逻辑处理，所以构造了一个高阶组件WithTweets，把App作为WithTweets的子组件
// 显示，这样App只需要显示内容，逻辑处理在WithTweets里面做
function App({ isLoading, setTweets, onSelectTweet }) {
  // onSelectTweet是一个函数，用于在WithTweests组件中更新状态modalIsOpen和currentTweet
  return (
    <div className="App">
      <input 
      placeholder="Search for Tweets..." 
      onChange={(e) => { 
        return setTweets(e.target.value);
      }}
      />
      {tweets.map(tweet => <TweetRow  key={tweet.username} tweet={tweet} onClick={onSelectTweet} />)}
    </div>
  )
}
const AppWithTweets = withTweets(App);
const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithTweets />, rootElement);

const withTweets = (WrappedComponent) => {
  return class WithTweets extends React.Component {
    constructor(props) {
      // ...
    }

    componentDidMount() {
      // ...
    }

    onSelectTweet = tweet => {
      this.setState({ modalIsOpen: true, currentTweet: tweet });
    };

    fetchTweets(query) {
      // ...
    }

    render() {
      return (
        <>{/* WrappedComponent组件就是调用withTweets时传进来的App组件 */}
          <WrappedComponent
            setTweets={debounce(query => this.fetchTweets(query), 1000)}
            onSelectTweet={this.onSelectTweet}
            {...this.state}
            {...this.props}
          />
          {this.state.modalIsOpen && (
            <div
              className="modal"
              onClick={() => this.setState({ modalIsOpen: false })}
            >
              <div
                className="modal__content"
                onClick={e => e.stopPropagation()}
              >
                <TweetCard tweet={this.state.currentTweet} />
              </div>
            </div>
          )}
        </>
      );
    }
  };
};



// 3、props的解构。如下，App是一个组件，直接将参数props解构
function App({ isLoading, setTweets, onSelectTweet }) {}