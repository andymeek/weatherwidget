import React, { PropTypes } from 'react';
import { v4 } from 'node-uuid';

let inputTitleElem;
let inputUnitElem;
let inputWindElem;

const AddWidgets = ({ onAddWidget }) => (
  <div className="weather-container__add-widgets">
    <h2 className="weather-container__title weather-container__title--h2">Add Widgets...</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const inputTitleValue = inputTitleElem.value.trim();
        const inputUnitValue = inputUnitElem.checked ? 'imperial' : 'metric';
        const inputWindValue = inputWindElem.checked;
        if (inputTitleValue === '') {
          return;
        }
        onAddWidget({
          id: v4(),
          title: inputTitleValue,
          unit: inputUnitValue,
          wind: inputWindValue,
        });
      }}
    >
      <fieldset>
        <div className="weather-container__form__row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            size="50"
            ref={(node) => {
              inputTitleElem = node;
            }}
          />
        </div>
        <div className="weather-container__form__row">
          <label htmlFor="unit">Unit: metric or imperial (<small>Tick for imperial</small>)</label>
          <input
            type="checkbox"
            id="units"
            value="metric"
            ref={(node) => {
              inputUnitElem = node;
            }}
          />
        </div>
        <div className="weather-container__form__row">
          <label htmlFor="wind">Show Wind: true or false (<small>Tick for true</small>)</label>
          <input
            type="checkbox"
            id="wind"
            ref={(node) => {
              inputWindElem = node;
            }}
          />
        </div>
        <div className="weather-container__form__row">
          <input type="submit" id="submit" value="Submit" className="weather-container__form__button" />
        </div>
      </fieldset>
    </form>
  </div>
);

AddWidgets.propTypes = {
  onAddWidget: PropTypes.func.isRequired,
};

export default AddWidgets;
