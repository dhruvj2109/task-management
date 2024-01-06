import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import styles from './Home.module.scss';
import MyProjects from '../../sections/my-projects';
import MyTasks from '../../sections/my-tasks';

const Home = () => {
	const [taskInfo, setTaskInfo] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!taskInfo) {
			setLoading(true);

			const baseUrl = 'https://api.jsonbin.io/v3/b/6598d360dc746540188da259';
			const headers = {
				'Content-Type': 'application/json',
				'X-Master-Key': '$2a$10$NCbOaiAMLhgiVqZtEzhNyOQQRGX1OyD7BDQJa5WQ4RgxYbv3KCYfu'
			};
			axios
				.get(baseUrl, { headers: headers })
				.then(res => setTaskInfo(res.data.record.tasks))
				.catch(err => console.log(err))
				.finally(() => setLoading(false));
		}
	}, [taskInfo]);

	const myProjects = useMemo(() => <MyProjects />, []);

	return (
		<div className={styles['home-page']}>
			<div className={styles['home-page-content']}>
				{myProjects}
				<MyTasks taskInfo={taskInfo} loading={loading} />
			</div>
			<div className="home-page-sidebar">Sidebar</div>
		</div>
	);
};

export default Home;
