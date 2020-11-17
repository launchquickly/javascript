function message(id) {
    switch (id) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        default:
            return 'not recognised';
    }
}
module.exports = message;