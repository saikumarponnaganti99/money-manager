// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="moneyDetailsContainer">
      <div className="balanceContainer balance">
        <div className="img-and-amount-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="moneyDetailsImg"
          />
          <div className="amountContainer">
            <p className="card-name">Your Balance</p>
            <p className="card-amount" data-testid="balanceAmount">
              Rs {balanceAmount}
            </p>
          </div>
        </div>
      </div>

      <div className="balanceContainer income">
        <div className="img-and-amount-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="moneyDetailsImg"
          />
          <div className="amountContainer">
            <p className="card-name">Your Income</p>
            <p className="card-amount" data-testid="incomeAmount">
              Rs {incomeAmount}
            </p>
          </div>
        </div>
      </div>

      <div className="balanceContainer expenses">
        <div className="img-and-amount-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="moneyDetailsImg"
          />
          <div className="amountContainer">
            <p className="card-name">Your Expenses</p>
            <p className="card-amount" data-testid="expensesAmount">
              Rs {expensesAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
