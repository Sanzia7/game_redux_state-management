import { setCurrentPlayer, setDraw, setField, setWin } from '../../actions'
import { useDispatch, useReduxState } from '../../redux-manager'
import * as check from '../../utils/check'
import { FieldLayout } from './FieldLayout'

export const FieldContainer = () => {
	const { field, currentPlayer, win, draw } = useReduxState()

	const dispatch = useDispatch()


	const handleClick = (idxCell) => {
		if (field[idxCell] || win || draw) return;

		const newField = field.map((cell, idx) => (idx === idxCell ? currentPlayer : cell))


		dispatch(setField(newField))

		if (check.isWin(newField, currentPlayer)) {
			dispatch(setWin(true))
			return
		}
		if (check.isDraw(newField)) {
			dispatch(setDraw(true))
			return
		}


		const newCurrentPlayer = currentPlayer === 'X' ? 'O' : 'X'
		dispatch(setCurrentPlayer(newCurrentPlayer))
	}

	return <FieldLayout field={field} onClick={handleClick} />

};


	//export const Game = () => {
	//const [field, setField] = useState(initilalField);
	// const [currentPlayer, setCurrentPlayer] = useState('X');
	// const [win, setWin] = useState(false);
	// const [draw, setDraw] = useState(false);

// 	const handleClick = (idxCell) => {
// 		if (field[idxCell] || win || draw) return;
//
// 		const newField = field.map((cell, idx) => (idx === idxCell ? currentPlayer : cell));
//
// 		setField(newField);
//
// 		if (check.isWin(newField, currentPlayer)) {
// 			setWin(true);
// 			return;
// 		}
// 		if (check.isDraw(newField)) {
// 			setDraw(true);
// 			return;
// 		}
//
// 		setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
// 	};

	// const handleReset = () => {
	// 	setField(initilalField);
	// 	setWin(false);
	// 	setDraw(false);
	// 	setCurrentPlayer('X');
	// };

// 	return (
// 		<GameLayout
// 			props={{ handleReset, handleClick }}
// 		/>
// 	);
// };
