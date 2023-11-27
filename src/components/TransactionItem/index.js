// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, title, amount, type} = historyDetails

  const onClickButton = () => {
    deleteHistory(id)
  }

  return (
    <li className="eachHistory">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p> {type}</p>
      <button
        type="button"
        className="deleteButton"
        data-testid="delete"
        onClick={onClickButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="imgDelete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
