export function conversionDate(){
    const zeroCorrect = (value) => (value < 10) ? `0${value}`: value;

    const newDate = new Date();
    const getDate = zeroCorrect(newDate.getDate());
    const getMounth = zeroCorrect(newDate.getMonth() + 1);
    const getYear = newDate.getFullYear();
    const getTime = `${zeroCorrect(newDate.getHours())}:${zeroCorrect(newDate.getMinutes())}`;
    const date = `${getDate}.${getMounth}.${getYear}, ${getTime}`;
    return date;
}