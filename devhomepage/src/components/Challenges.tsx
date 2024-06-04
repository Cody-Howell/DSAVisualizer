import React from 'react';
import { ChallengeType } from './ChallengeType';
import { timeframe1Array } from './Data.ts'

export class Challenges extends React.Component {
  render() {
    let renderArray: React.ReactNode[] = [];
    renderArray.push(<TimeFrame title="Summer 2024" challenges={timeframe1Array} key={"Tada"}/>);

    return (
      <div id='challengePage'>
        <h1>Challenges</h1>
        <p>This page will hold the links to GitHub repositories for each of the projects we do. Currently, there is only one group,
          the Summer 2024 challenge group, consisting of Taft and Cody (as far as I know). We still need to decide what the challenges will be,
          but then they will be posted to this page along with everyone's progress!</p>
          {renderArray}
      </div>
    );
  }
}

class TimeFrame extends React.Component<{challenges: Array<ChallengeType>, title: String}, {open: Boolean}> {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    let challengeObjects: React.ReactNode[] = [];
    for (let i = this.props.challenges.length - 1; i >= 0; i--){
      challengeObjects.push(<Challenge challenge={this.props.challenges[i]} key={String(this.props.challenges[i].title)}/>);
    }
    return(
      <div className='timeFrameElement' onClick={this.handleOpen}>
        <h1>{this.props.title}</h1>
        {this.state.open && (challengeObjects)}
      </div>
    )
  }
}

class Challenge extends React.Component <{challenge: ChallengeType}, {}> {
  render() {
    let challenge = this.props.challenge;
    return(
      <div className='challengeElement' >
        <h2>{challenge.title}: Task #{String(challenge.number)}</h2>
        <p>{challenge.description}</p>
        {challenge.codyLink !== "" && (<a href={challenge.codyLink}>Cody's Link</a>)}
        {challenge.taftLink !== "" && (<a href={challenge.taftLink}>Taft's Link</a>)}
        {challenge.jesseLink !== "" && (<a href={challenge.jesseLink}>Jesse's Link</a>)}

      </div>
    )
  }
}