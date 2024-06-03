import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import App_board_module from './app.board.module.scss';

export default createBoard({
    name: 'App',
    Board: () => (
            <App className={App_board_module.container} />
    ),
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
