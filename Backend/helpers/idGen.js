const idGen = () => {
    const random = Math.random().toString(32).substring(2)
    const date = Date.now().toFixed().toString(32)
    return random + date
}
export default idGen