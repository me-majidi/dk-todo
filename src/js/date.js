import moment from 'moment';

const date = moment();

$('.js-date-day').text(date.format('Do, dddd'));
$('.js-date-month').text(date.format('MMMM YYYY'));