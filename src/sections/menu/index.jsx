import React, { useCallback } from 'react';
import styles from './Menu.module.scss';
import Logo from '../../assets/d3g51r9-8905ea1e-fa89-48dd-bf6b-b4145b9260a7.png';
import { RxDashboard } from 'react-icons/rx';
import { TiMessages } from 'react-icons/ti';
import { Link, useLocation } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoLogOutSharp } from 'react-icons/io5';

const Menu = () => {
	const location = useLocation();

	const activeMenu = useCallback(path => (location.pathname === path ? styles['active-menu'] : ''), [location.pathname]);

	return (
		<div className={styles['menu-con']}>
			<div className={styles['menu-con-header']}>
				<img src={Logo} alt="logo" />
				<div className={styles['menu-con-items']}>
					<Link className={activeMenu('/')} to={'/'}>
						<RxDashboard />
					</Link>
					<Link className={activeMenu('/notifications')} to={'/notifications'}>
						<IoMdNotificationsOutline />
					</Link>
					<Link className={activeMenu('/messages')} to={'/messages'}>
						<TiMessages />
					</Link>
					<Link to="/settings" className={activeMenu('/settings')}>
						<IoSettingsOutline />
					</Link>
				</div>
			</div>
			<IoLogOutSharp className={styles['logout-icon']} />
		</div>
	);
};

export default Menu;
