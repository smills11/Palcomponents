import React from "react";

import clsx from "clsx";
import { X } from "lucide-react";
import PropTypes from "prop-types";

import "./SearchFilterModal.styled.scss";
import handleKeyDown from "../../utils/keyboardHandler";

const SearchFilterModal = ({
  classNames,
  housingOptions,
  locationOptions,
  selectedHousingFilters,
  selectedLocationFilters,
  changeHousingFilter,
  changeLocationFilter,
  onApplyFilters,
  handleClose = undefined,
}) => {
  const wrappedClassNames = clsx(classNames);

  const handleHousingFilters = (value) => {
    let newFilterValue = [];
    if (selectedHousingFilters.includes(value)) {
      newFilterValue = [...selectedHousingFilters].filter(
        (elem) => elem !== value,
      );
    } else {
      newFilterValue = [...selectedHousingFilters, value];
    }
    changeHousingFilter(newFilterValue);
  };

  const handleLocationFilters = (value) => {
    let newFilterValue = [];
    if (selectedLocationFilters.includes(value)) {
      if (value === "All") {
        newFilterValue = [];
      } else {
        const itemsToRemove = ["All", value];
        newFilterValue = [...selectedLocationFilters].filter(
          (elem) => !itemsToRemove.includes(elem),
        );
      }
    } else if (value === "All") {
      newFilterValue = [value, ...locationOptions];
    } else {
      newFilterValue = [...selectedLocationFilters, value];
      if (
        [...locationOptions].sort().join(",") ===
        newFilterValue.sort().join(",")
      ) {
        newFilterValue = ["All", ...newFilterValue];
      }
    }
    changeLocationFilter(newFilterValue);
  };

  const onClear = () => {
    changeHousingFilter([]);
    changeLocationFilter([]);
  };

  return (
    <div className={wrappedClassNames}>
      <div className="ui-search-filter-modal">
        <button className="ui-post-close-button" onClick={handleClose}>
          <X strokeWidth={0.5} />
        </button>
        <div className="ui-search-filter-title">
          Let&apos;s refine your search!
        </div>

        <div className="ui-search-filter-section-cont">
          <div className="ui-search-filter-section">
            <h3 className="ui-search-filter-section-title">
              What are you looking for?
            </h3>
            <div className="ui-search-filter-options-cont">
              {housingOptions.map((housingOption) => (
                <div
                  key={housingOption}
                  className={clsx("ui-search-filter-option", {
                    selected: selectedHousingFilters.includes(housingOption),
                  })}
                  onClick={() => handleHousingFilters(housingOption)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    handleKeyDown(e, () => handleHousingFilters(housingOption))
                  }
                >
                  {housingOption}
                </div>
              ))}
            </div>
          </div>

          <div className="ui-search-filter-section">
            <h3 className="ui-search-filter-section-title">What location?</h3>
            <div className="ui-search-filter-options-cont">
              {["All", ...locationOptions].map((location) => (
                <div
                  key={location}
                  className={clsx("ui-search-filter-option", {
                    selected: selectedLocationFilters.includes(location),
                  })}
                  onClick={() => handleLocationFilters(location)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    handleKeyDown(e, () => handleLocationFilters(location))
                  }
                >
                  {location}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ui-search-filter-actions-cont">
          <button className="ui-search-filter-clear-all-btn" onClick={onClear}>
            Clear all
          </button>
          <button
            className="ui-search-filter-apply-btn"
            onClick={onApplyFilters}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

SearchFilterModal.propTypes = {
  classNames: PropTypes.string,
  housingOptions: PropTypes.arrayOf(PropTypes.string),
  locationOptions: PropTypes.arrayOf(PropTypes.string),
  selectedHousingFilters: PropTypes.arrayOf(PropTypes.string),
  selectedLocationFilters: PropTypes.arrayOf(PropTypes.string),
  changeHousingFilter: PropTypes.func,
  changeLocationFilter: PropTypes.func,
  onApplyFilters: PropTypes.func,
  handleClose: PropTypes.func,
};

export default SearchFilterModal;
