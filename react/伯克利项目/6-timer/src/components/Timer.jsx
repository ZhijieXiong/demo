import React from 'react';
import formatSecondsToMinutesAndSeconds from '../lib/formatSecondsToMinutesAndSeconds';
import PausePlayButton from './PausePlayButton';
import ResetButton from './ResetButton';
import '../styles/timer.css';

const WORK_TIME = 8;
const BREAK_TIME = 3;

const MODES_TIMES = {
  WORK: WORK_TIME,
  BREAK: BREAK_TIME,
};

const TIME_STEP = 1000;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.setTimer = this.setTimer.bind(this);
    this.stop = this.stop.bind(this);
    this.tick = this.tick.bind(this);
    this.completeSession = this.completeSession.bind(this);
    this.toggleIsPlaying = this.toggleIsPlaying.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      // TODO 1: initialize state
      mode: props.mode,
      time: MODES_TIMES[props.mode],
      isPlaying: props.autoPlays
    };
  }

  componentDidMount() {
    const { mode, time } = this.state;  // 获得初始状态
    // TODO 2: set the timer
    this.setTimer(mode, time);
  }

  componentWillUnmount() {
    // TODO 3: stop the timer
    this.stop();
  }

  setTimer(mode, time) {
    // TODO 2.1: set state
    this.setState({mode, time});
    // TODO 2.1: initialize timer
    const intervalID = setInterval(this.tick, TIME_STEP);
    this.timerID = intervalID;
  }

  stop() {
    // TODO 3: set isPlaying to false
    // TODO 3: clear timer
    this.setState({
      isPlaying: false
    });
    clearInterval(this.timerID);
  }

  tick() {
    const { mode, isPlaying, time } = this.state;

    if (isPlaying) {
      this.setState((prevState) => {
        /* TODO 2.2: decrease time's value by one */
        return {time: prevState.time - 1};
      },
      () => {
        if (time === 0) {
          // TODO 2.2: stop timer
          this.stop();
          if (mode === 'WORK') {
            //TTODO 2.2: set a new timer in BREAK mode
            this.setState({
              mode: "BREAK"
            }, () => {
              this.setTimer(this.state.mode, BREAK_TIME);
            });
          }

          if (mode === 'BREAK') {
            // TODO 2.2: call complete session
            // TODO 2.2: set a new timer in WORK mode
            this.completeSession();
            this.setState({
              mode: "WORK"
            }, () => {
              this.setTimer(this.state.mode, WORK_TIME);
            });

          }
        }
      });
    }
  }

  toggleIsPlaying() {
    // TODO 5: Use the previous state to write this more succintly
    this.setState((prevState) => {
      return prevState.isPlaying ? {
        isPlaying: false
      } : {
        isPlaying: true
      };
    });
  }

  reset() {
    // TODO 4: call stop and set a new timer
    this.stop();
    this.setState({
      isPlaying: false
    });
    this.setTimer("WORK", WORK_TIME);
  }

  completeSession() {
    // TODO 7: call onComplete here
    this.props.onSessionComplete();
    this.props.increaseSessionsCompleted();
  }


  render() {
    const { mode, time, isPlaying } = this.state;
    // TODO 6: make sure we are showing the right class depending on the mode
    const timerClassName = 'timer-container ' + (this.state.mode === "WORK" ? 'timer-work' : 'timer-break');
    return (
      <div className={timerClassName}>
        <div>
          <ResetButton onClick={this.reset} />
        </div>
        {/* TODO 6: change time to be the newly formatted time */}
        <div>{formatSecondsToMinutesAndSeconds(time)}</div>
        <div>
          <PausePlayButton isPlaying={isPlaying} onClick={this.toggleIsPlaying} />
        </div>
      </div>
    );
  }
}

export default Timer;
