/* eslint-disable react/prop-types */

const Search = ({ search, setSearch }) => {
	return (
		<div className="search">
			<h2>Pesquisar</h2>
			<input
				type="text"
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
				}}
				placeholder="Digite para pesquisar"
			/>
		</div>
	);
};

export default Search;
