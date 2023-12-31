// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickUpdateButton = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button type="button" className="button" onClick={onClickUpdateButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
