

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeid(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

function getCurrency(currencyCode) {
    switch(currencyCode){
        case 'ILS' : 
            return '₪';
        case 'EUR' : 
            return '€';
        case 'USD' :
            return '$';
        default:
            return '';
    }
}

function getNextId(items) {
    var max = 0;
    items.forEach(function(item){
        if (item.id > max) max = item.id;
    })
    return max+1;
  }
  
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


export default {
    getRandomInt,
    getRandomString : makeid,
    getCurrency,
    randomDate,
    getNextId,
    getParameterByName
}

