import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route
                        path="/"
                        exact={true}
                        children={ExpenseDashboardPage}
                    />
                    <Route path="/create" children={AddExpensePage} />
                    <Route path="/edit/:id" children={EditExpensePage} />
                    <Route path="/help" children={HelpPage} />
                    <Route children={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
