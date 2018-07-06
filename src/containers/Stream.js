import React, { Component } from 'react';

class Stream extends Component {

  render () {
    return (
      <div>
        <iframe
          src="http://player.twitch.tv/?channel=testament_jr"
          height="300"
          width="400"
          frameborder="<frameborder>"
          scrolling="no"
          allowfullscreen="true">
        </iframe>
      </div>
    )
  }
}

export default Stream;