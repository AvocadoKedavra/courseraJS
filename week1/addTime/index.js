/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    function validTime(hours,minutes) {
        if ((hours/24)>=1) {
            hours= hours-Math.floor(hours/24)*24;
            }
        if (hours<10) {
        hours = '0' + hours;
        }
        if (minutes<10) {
        minutes = '0' + minutes;
        }
        return hours + ':' + minutes;
    }
    var temp=(minutes+interval)/60;
    if (temp>=1) {
        hours+=Math.floor(temp);
        minutes=(minutes+interval)-Math.floor(temp)*60;
        return validTime(hours,minutes);
    } else {
        return validTime(hours,minutes+interval);
    }
};
