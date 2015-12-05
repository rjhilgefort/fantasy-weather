import moment from 'moment';

export var parseTeam = (team) => {
  team = _.ensureString(team);
  team = team.toUpperCase();
  team = _.trim(team);
  return team;
};

export var previousTuesday = (date) => {
  // Determine what the "current week" is and modify it accordingly
  // (so Tuesday is the effective start of the week)
  let startOfWeek = date.clone().startOf('week');
  let diff = date.diff(startOfWeek, 'days');
  if (diff < 2) {
    date.subtract(diff + 1, 'days');
  }

  // Get tuesday of the "current week"
  date.day(2);

  // if you want it for some reason- it will already have been modified
  return date;
};

export var generateTuesdaysFromDate = (dateString) => {
  let ret = [{
    week: 1,
    tuesday: moment(dateString)
  }];

  for (let i = 1; ret.length < 17; i++) {
    ret.push({
      week: i + 1,
      tuesday: ret[i-1].tuesday.clone().add(7, 'days')
    });
  }

  return ret;
};
