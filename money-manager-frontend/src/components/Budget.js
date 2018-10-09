import React, { Component } from "react";
import "./budget.css";

class Budget extends Component {
    state = {};
    render() {
        return (
            <div className="budget">
                <h1>Budget</h1>
                <div>
                    <h2>Income Stream</h2>
                    <table>
                        <thead>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Frequency</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Paycheck</td>
                            <td>$2000</td>
                            <td>2/month</td>
                        </tr>
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
                        <tr>
                            <td>Mortgage</td>
                            <td>$1300</td>
                            <td>1/month</td>
                        </tr>
                        <tr>
                            <td>Internet</td>
                            <td>$60</td>
                            <td>1/month</td>
                        </tr>
                        <tr>
                            <td>Cell Phone</td>
                            <td>$200</td>
                            <td>1/month</td>
                        </tr>
                        <tr>
                            <td>Credit Card</td>
                            <td>$60</td>
                            <td>1/month</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Budget;
