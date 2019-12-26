import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    
    componentWillMount() {
    }

    componentWillReceiveProps(newState) {
    }   
    
    render() {
        if (this.state.tweets.length === 0) {
          return (<div>This user has no Tweets</div>)
        } else {
          return (
            <div>
              <h2>All of This User's Tweets</h2>
            </div>
          );
        }
      }
}

export default Profile;
