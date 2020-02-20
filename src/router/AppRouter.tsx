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
                    <Route path="/" exact={true}>
                        <ExpenseDashboardPage />
                    </Route>

                    <Route path="/create">
                        <AddExpensePage />
                    </Route>

                    <Route path="/edit">
                        <EditExpensePage />
                    </Route>

                    <Route path="/help">
                        <HelpPage />
                    </Route>

                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
