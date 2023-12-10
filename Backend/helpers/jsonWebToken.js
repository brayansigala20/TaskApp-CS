import jsonwebtoken from "jsonwebtoken";

const genToken = (id) => {
    return jsonwebtoken.sign({ id }, process.env.JWT_WORD, {
        expiresIn: '30d'
    })
}
export default genToken