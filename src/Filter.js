import PropTypes from "prop-types";

export function Filter({ setFilter, filter }) {
  const handleChange = (e) => setFilter(e.target.value);

  return (
    <label className="filter">
      <span>Find your movie:</span>
      <input onChange={handleChange} value={filter} />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
