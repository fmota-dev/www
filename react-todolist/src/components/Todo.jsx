/* eslint-disable react/prop-types */

const Todo = ({ todo, completeTodo, removeTodo }) => {
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
		>
			<div className="content">
				<p>{todo.text}</p>
				<span>({todo.category})</span>
			</div>

			<div className="actions">
				<button
					type="button"
					className="complete"
					onClick={() => completeTodo(todo.id)}
				>
					Concluir
				</button>
				<button
					type="button"
					className="remove"
					onClick={() => removeTodo(todo.id)}
				>
					Excluir
				</button>
			</div>
		</div>
	);
};

export default Todo;
