class SOUND extends React.Component {
  playVideo() {
    this.refs.vidRef.play();
  }

  render() {
    return(
        url = "audio/CHERRY.mp3"
    );
  }
}

ReactDOM.render(<sound/>, document.getElementById('body'));