import PropTypes from 'prop-types';
import style from './Information.module.css';

export const InformationLayout = ({ info }) => {
	return <div className={style.info}>{info}</div>;
};

InformationLayout.propTypes = {
	status: PropTypes.string,
};
