// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="faqs-container">
        <div className="faqs-card-container">
          <h1 className="faqs-heading">FAQs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(eachItem => (
              <FaqItem faqItemDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
