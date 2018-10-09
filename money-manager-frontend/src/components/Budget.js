import React, { Component } from "react";
import "./budget.css";

class IncomeStream extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.amount}</td>
                <td>{this.props.frequency}</td>
            </tr>
        );
    }
}

class Expense extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.amount}</td>
            </tr>
        );
    }
}

class Budget extends Component {
    state = {};
    render() {

        const incomeStreamComponents = this.props.incomeStreams.map(incomeStreamObject => {
            return (
                <IncomeStream {...incomeStreamObject} />
            )
        })

        const expenseStreamComponents = this.props.expenses.map(expensesStreamObject => {
            return (
                <Expense {...expensesStreamObject} />
            )
        })

        return (
            <div className="budget">
                <h1>Budget</h1>
                <div>
                    <h2>Income Stream</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Frequency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incomeStreamComponents}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2>Expenses</h2>
                    <table>
                        <thead>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Frequency</th>
                        </thead>
                        <tbody>
                            {expenseStreamComponents}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Budget;
