export const combineClassNames = (base, classNames) => {
    if (base && classNames) {
        if (base !== '' && classNames !== '') {
            return `${base} ${classNames}`;
        }
        else {
            return `${base}${classNames}`;
        }
    } else if (base) {
        return base;
    } else if (classNames) {
        return classNames
    }
    
    return;
};
