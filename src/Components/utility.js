const componentToHex = c => {
    let hex = c.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}

const HexFromRgb = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

export default HexFromRgb;