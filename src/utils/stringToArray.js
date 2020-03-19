module.exports = {
    stringToArray(string) {
        return string.split(',').map(item =>item.trim());
    }
}