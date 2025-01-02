function camelToKebab(camelCaseStr) {
    return camelCaseStr
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert a hyphen between lowercase and uppercase letters
        .toLowerCase(); // Convert the entire string to lowercase
}