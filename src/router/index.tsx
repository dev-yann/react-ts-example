import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "../App";
import TicTacToeGame from "../packages/tictactoe/components/TicTacToeGame";
import SquareGame from "../packages/square/components/SquareGame";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'tic-tac-toe',
                element: <TicTacToeGame/>
            },
            {
                path: 'square',
                element: <SquareGame/>
            }
        ]
    }
]);

function Router() {
    return (
        <RouterProvider router={routes}/>
    )
}

export default Router;