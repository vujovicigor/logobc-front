export default function(dateTime){
    let date = new Date(dateTime);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();
    if (dt < 10) dt = '0' + dt;
    if (month < 10) month = '0' + month;
    return(year+'-' + month + '-'+dt);
}
