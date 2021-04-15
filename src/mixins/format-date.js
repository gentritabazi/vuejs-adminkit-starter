import moment from 'moment';

export default {
    methods: {
        formatDate: function (date, dateFormat) {
            return moment(date).format(dateFormat);
        }
    }
}