import React from "react";
import debounce from "./debounce";
import TweetCard from "./TweetCard.jsx";

const withTweets = (WrappedComponent) => {
  return class WithTweets extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        tweets: [],
        modalIsOpen: false,
        currentTweet: {}
      };
    }

    componentDidMount() {
      this.fetchTweets("from:reactjs");
    }

    onSelectTweet = tweet => {
      this.setState({ modalIsOpen: true, currentTweet: tweet });
    };

    fetchTweets(query) {
      this.setState({ isLoading: true });
      fetch(`https://twitter-scraper.now.sh/tweets/?q=${query}`, {mode: "no-cors"})
        .then(resp => resp.json())
        .then(resp => {
          this.setState({
            isLoading: false,
            tweets: resp
          });
        })
        .catch(err => console.error(err));
    }

    render() {
      return (
        <>
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

export default withTweets;
