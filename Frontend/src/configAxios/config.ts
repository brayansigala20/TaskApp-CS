export const config = () => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }
    return config
}