import React, { useState } from "react";

const TodoList = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	const createTask = e => {
		if (e.keyCode == 13) {
			let newList = [];
			for (let i = 0; i < list.length; i++) {
				newList.push(list[i]);
			}
			newList.push(task);
			setList(newList);
			setTask("");
		}
	};

	const deleteItems = indexItem => {
		setList(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};

	const contList = list.map(function(newTask, i) {
		return (
			<li
				key={i}
				className="list-group-item mb-4 d-flex justify-content-between">
				{newTask}
				<div className="btn" onClick={e => deleteItems(i)}>
					<i className="fas fa-times" />
				</div>
			</li>
		);
	});

	const Counter = list.length;

	return (
		<>
			<h1 className="text-white bg-danger br-2px">
				{"TO DO LIST APLICATION"}
			</h1>
			<div className="container mt-5">
				<input
					className="mb-5 col-12"
					value={task}
					onKeyDown={createTask}
					onChange={e => {
						setTask(e.target.value);
					}}
					type="text"
					placeholder="Write a Task or Many Tasks..."
				/>
				<ul className="list-group list-group-flush text-center">
					{contList}
				</ul>
				<div className="card-footer text-white bg-danger mt-3">
					{Counter === 0 ? "Does Not Having a Tasks" : Counter}
				</div>
			</div>
		</>
	);
};
export default TodoList;
