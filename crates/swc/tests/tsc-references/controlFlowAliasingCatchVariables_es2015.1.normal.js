// @useUnknownInCatchVariables: true,false
try {} catch (e) {
    const isString = typeof e === 'string';
    if (isString) {
        e.toUpperCase(); // e string
    }
    if (typeof e === 'string') {
        e.toUpperCase(); // e string
    }
}
try {} catch (e1) {
    const isString = typeof e1 === 'string';
    e1 = 1;
    if (isString) {
        e1.toUpperCase(); // e any/unknown
    }
    if (typeof e1 === 'string') {
        e1.toUpperCase(); // e string
    }
}