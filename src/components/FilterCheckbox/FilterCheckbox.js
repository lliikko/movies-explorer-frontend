import './FilterCheckbox.css';

const FilterCheckbox = ({ handleFilterShorts, filterCheckbox }) => {
  return (
      <label className="filter-checkbox">
        <input
          type="checkbox"
          id="input-checkbox"
          className="filter-checkbox__checkbox"
          checked={filterCheckbox ? true : false}
          onChange={handleFilterShorts}
        />
        <span className="filter-checkbox__checkbox-switch" />
        <span className="filter-checkbox__checkbox-title">Короткометражки</span>
      </label>
  );
};

export default FilterCheckbox;
