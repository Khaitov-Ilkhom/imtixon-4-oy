const ins = axios.create({
    baseURL: "https://blogpost-server-production-d92d.up.railway.app/api/v1",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
    },
    timeout: 10000
})

export default ins