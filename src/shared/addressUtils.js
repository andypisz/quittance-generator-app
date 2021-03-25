const buildFullAddress = function (address1, address2, postalCode, city) {
    let result = address1;
    if (address2 !== '') {
        result += `, ${address2}`;
    }
    result += `, ${postalCode} ${city}`;
    return result;
}

export const addressUtilsFunction = {
    buildFullAddress,
};