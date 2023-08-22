// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isButtonActive: false}

  render() {
    const {isButtonActive} = this.state
    const {faqItemDetails} = this.props
    const {questionText, answerText} = faqItemDetails

    const buttonImage = isButtonActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isButtonActive ? 'minus' : 'plus'

    const onClickButton = () => {
      this.setState(prevState => ({
        isButtonActive: !prevState.isButtonActive,
      }))
    }

    const displayAnswerText = () => (
      <div>
        <hr className="line" />
        <p className="answer-text">{answerText}</p>
      </div>
    )

    return (
      <li className="faqs-item-container">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          <button type="button" onClick={onClickButton} className="button">
            <img src={buttonImage} alt={altText} className="image" />
          </button>
        </div>
        {isButtonActive ? displayAnswerText() : null}
      </li>
    )
  }
}

export default FaqItem
