import React from 'react';
import styles from './Card.module.scss';
import { CiMenuKebab } from 'react-icons/ci';

const Card = ({ cardInfo }) => {
	return (
		<div className={`${styles['card-con']} ${styles[`card-con--${cardInfo.backgroundColor}`]}`}>
			<div className={styles['card-con-header']}>
				<div className={styles['icon-con']}>{cardInfo.icon}</div>
				<h6>{cardInfo.title}</h6>
				<CiMenuKebab className={styles['info-icon']} />
			</div>
			<div className={styles['card-con-content']}>
				<p className={styles['content-number']}>{cardInfo.numbers}</p>
				<p className={styles['change-from-yesterday']}>{cardInfo.change}</p>
			</div>
		</div>
	);
};

export default Card;
