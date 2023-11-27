import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    historyList: [],
    titleInput: '',
    AmountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const updateHistoryList = historyList.filter(each => id !== each.id)
    this.setState({
      historyList: updateHistoryList,
    })
  }

  onChangeTitle = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      AmountInput: event.target.value,
    })
  }

  onChangeType = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  onAddButton = event => {
    event.preventDefault()
    const {titleInput, AmountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption

    const newHistory = {
      id: v4(),
      title: titleInput,
      amount: parseInt(AmountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      titleInput: '',
      AmountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {historyList} = this.state
    let expensesAmount = 0

    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expensesAmount += each.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {historyList} = this.state
    let incomeAmount = 0

    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {historyList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      } else {
        expensesAmount += each.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {historyList, titleInput, AmountInput, optionId} = this.state
    console.log(historyList)
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="appContainer">
        {/* name-container top div */}

        <div className="nameContainer">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />

        <div className="addTransactionAndHistoryContainer">
          {/* AddTransactionContainer */}
          <form className="AddTransactionContainer" onSubmit={this.onAddButton}>
            <h1>Add Transaction</h1>
            <label htmlFor="titleInput" className="label">
              TITLE
            </label>
            <input
              type="text"
              className="input"
              id="titleInput"
              placeholder="TITLE"
              value={titleInput}
              onChange={this.onChangeTitle}
            />

            <label htmlFor="amountInput" className="label">
              AMOUNT
            </label>
            <input
              type="text"
              className="input"
              id="amountInput"
              placeholder="AMOUNT"
              value={AmountInput}
              onChange={this.onChangeAmount}
            />

            <label htmlFor="amountInput" className="label">
              TYPE
            </label>
            <select
              className="input"
              value={optionId}
              onChange={this.onChangeType}
            >
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>

            <button type="submit" className="addButton">
              Add
            </button>
          </form>

          {/* History container */}
          <div className="historyContainer">
            <h1>History</h1>
            <div className="historiesContainer">
              <p>Title</p>
              <p>Amount</p>
              <p> Type</p>
            </div>
            <ul className="historiesContainerBtm">
              {historyList.map(each => (
                <TransactionItem
                  key={each.id}
                  historyDetails={each}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
