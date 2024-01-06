import React, { useState, useMemo } from 'react';
import styles from './MyProjects.module.scss';
import { IoIosSearch } from 'react-icons/io';
import { FaChartSimple } from 'react-icons/fa6';
import { HiDocumentAdd } from 'react-icons/hi';
import { HiMiniFolderOpen } from 'react-icons/hi2';
import Card from '../../components/card';

const MyProjects = () => {
	const [activeTab, setActiveTab] = useState('myProject'); // ['myProject', 'planning', 'team']
	const homepageHeading = useMemo(() => {
		return [
			{ id: 'myProject', title: 'My Projects' },
			{ id: 'planning', title: 'Planning' },
			{ id: 'team', title: 'Team' }
		];
	}, []);

	const cardVariantsInfo = useMemo(() => {
		return [
			{
				id: 'inProgress',
				title: 'Tasks In Progress',
				color: '#FFC107',
				numbers: 17,
				change: '+12% from yesterday',
				icon: <FaChartSimple className={styles['icon-details']} />,
				backgroundColor: 'orange'
			},
			{
				id: 'completed',
				title: 'New Assigned',
				color: '#4CAF50',
				numbers: 12,
				change: '+7% from yesterday',
				icon: <HiDocumentAdd className={styles['icon-details']} />,
				backgroundColor: 'purple'
			},
			{
				id: 'completed',
				title: 'Project Completed',
				color: '#9E9E9E',
				numbers: 10,
				change: '+5% from yesterday',
				icon: <HiMiniFolderOpen className={styles['icon-details']} />,
				backgroundColor: 'light-blue'
			}
		];
	}, []);
	return (
		<div className={styles['projects-con']}>
			<div className={styles['projects-con-header']}>
				{homepageHeading.map((tab, index) => (
					<h4 className={activeTab === tab.id ? styles['active-tab'] : ''} key={index}>
						{tab.title}
					</h4>
				))}
				<div className={styles['search-box']}>
					<IoIosSearch />
					<input placeholder="Search project name" />
				</div>
			</div>
			<div className={styles['projects-con-cards-section']}>
				{cardVariantsInfo.map((card, index) => (
					<Card key={index} cardInfo={card} />
				))}
			</div>
		</div>
	);
};

export default MyProjects;
