import React, { useMemo, useState } from 'react';
import styles from './MyTasks.module.scss';
import Button from '../../components/button';
import Spinner from 'react-bootstrap/Spinner';
import { FaBlender } from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { RxAvatar } from 'react-icons/rx';

const MyTasks = ({ taskInfo, loading }) => {
	const [progressType, setProgressType] = useState('In Progress'); // 'In Progress', 'Completed', 'Not Started'
	const typeOfTasks = useMemo(() => {
		return [...new Set(taskInfo?.map(task => task.progress))];
	}, [taskInfo]);

	return (
		<div className={styles['my-tasks-con']}>
			<div className={styles['task-header']}>
				<h3>My Tasks</h3>
				<Button>Add Tasks</Button>
			</div>
			{loading ? (
				<Spinner animation="border" role="status" style={{ margin: '100px auto 0 auto' }}>
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			) : (
				<div className={styles['task-content']}>
					<div className={styles['menu-bar']}>
						<div className={styles['menu-bar-item']}>
							{typeOfTasks.map((type, index) => (
								<button key={index} className={progressType === type ? styles['active-item'] : styles['normal-item']} onClick={() => setProgressType(type)}>
									{type}
								</button>
							))}
						</div>
					</div>
					<div className={styles['task-info-con']}>
						<div className={styles['task-info-con-cards']}>
							{taskInfo
								?.filter(t => t.progress === progressType)
								.map(task => {
									return (
										<div key={task.id} className={styles['task-info-con-item-card']}>
											<FaBlender className={styles['task-icon']} />
											<div className={styles['title-description']}>
												<p className={styles['title']}>{task.title}</p>
												<p className={styles['description']}>{task.description}</p>
											</div>
											<RxAvatar className={styles['avatar-con']} />
											<div className={styles['progress-con']}>
												<div className={styles['progress-info']}>
													<p>Progress</p>
													<p>{task.completedPercentage}%</p>
												</div>
												<ProgressBar
													className={styles['progress-bar']}
													now={task.completedPercentage}
													label={`${task.completedPercentage}%`}
													visuallyHidden
												/>
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MyTasks;
