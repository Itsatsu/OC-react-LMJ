function handleClick(scaleValue, careType) {
    let type = careType === 'light' ? 'de lumière' : "d'eau"
    switch (scaleValue) {
        case 1:
            alert(`Cette plante requiert peu ${type} `)
            break
        case 2:
            alert(`Cette plante requiert un peu plus ${type} `)
            break
        case 3:
            alert(`Cette plante requiert beaucoup ${type} `)
            break
        default:
            break
    }

}
function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={() => handleClick(scaleValue,careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale