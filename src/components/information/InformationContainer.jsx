import PropTypes from 'prop-types'
import { useReduxState } from '../../redux-manager'
import { InformationLayout } from './InformationLayout'


export const InformationContainer = () => {

	const {draw, win, currentPlayer } = useReduxState()

	const info = win
		? `Победил: ${currentPlayer} !!!`
		: draw
			? `= Ничья =`
			: `Ходит: ${currentPlayer}`;

	return <InformationLayout info={info} />;
};

InformationContainer.propTypes = {
	drw: PropTypes.string,
	win: PropTypes.string,
	currentPlayer: PropTypes.string,
};
