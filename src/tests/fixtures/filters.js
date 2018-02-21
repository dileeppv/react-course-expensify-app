import moment from 'moment';


const filters = {
sortBy:'date',
text:'',
startDate:undefined,
endDate:undefined
};


const altFilters = {
    sortBy:'date',
    text:'',
    startDate:moment(0),
    endDate:moment(0).add(3,'days')
    };

    export {filters , altFilters};