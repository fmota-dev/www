/* eslint-disable react/prop-types */
const Filter = ({ filter, setFilter, setSort }) => {
	return (
		<div>
			<h2>Filtrar:</h2>
			<div className="filter-options">
				<div>
					<p>Status:</p>
					<select
						value={filter}
						onChange={(event) => {
							setFilter(event.target.value);
						}}
					>
						<option value="all">Todas</option>
						<option value="completed">Completas</option>
						<option value="not-completed">Não completas</option>
					</select>
				</div>
				<div>
					<p>Ordem Alfabética</p>
					<button onClick={() => setSort("asc")} type="button">
						ASC
					</button>
					<button onClick={() => setSort("desc")} type="button">
						DESC
					</button>
				</div>
			</div>
		</div>
	);
};

export default Filter;
