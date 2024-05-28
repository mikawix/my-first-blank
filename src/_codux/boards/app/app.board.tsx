import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import App_board_module from './app.board.module.scss';

export default createBoard({
    name: 'App',
    Board: () => (
        <div className={App_board_module.container}>
            <App />
        </div>
    ),
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
