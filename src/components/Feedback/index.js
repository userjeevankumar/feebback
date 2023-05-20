// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion() {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-container">
        <h1 className="heading">
          How Satisfied you with our customer support Performance?
        </h1>
        <ul className="emoji-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" className="btn" onClick={this.onClickEmoji}>
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="img-emoji"
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen() {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="container">
        <img src={loveEmojiUrl} alt="love Emoji" className="img-love" />
        <h1 className="TQ">Thank You!</h1>
        <p className="para">
          We will improve your feed back to improve our customer support
          performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.true

    return (
      <div className="container-down">
        <div className="card">
          {isFeedbackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
