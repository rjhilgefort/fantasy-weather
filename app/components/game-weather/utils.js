import moment from 'moment';

/**
 * Returns an ISO time format that forecastio likes
 * https://developer.forecast.io/docs/v2#time_call
 *
 * @name getDateStringFromGame
 * @param {Object} game
 *   @param {Number} year:
 *   @param {Number} month:
 *   @param {Number} day:
 *   @param {String} time:
 * @return {String} dateString
 */
export var getDateStringFromGame = ({ year, month, day, time }) => {
  if (
    !_.isNumber(year) || !_.isNumber(month) ||
    !_.isNumber(day) || !_.isString(time)
  ) {
    throw new Error('Not enough info on `game` object to get time');
  }

  let inputFormat = 'YYYY-MM-DD H:mm';
  let dateString = moment(`${year}-${month}-${day} ${time}`, inputFormat);
  if (!dateString.isValid()) {
    throw new Error('game time could not be determined');
  }

  // Format: [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS]
  // let outputFormat = 'YYYY-MM-DDTHH:MM:SS'
  return dateString.format();
};
