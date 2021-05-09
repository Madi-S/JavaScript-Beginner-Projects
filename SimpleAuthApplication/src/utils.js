export function questionInputIsValid(value) {
    value = value.trim()
    return value.length >= 10 && value.length <= 255
}