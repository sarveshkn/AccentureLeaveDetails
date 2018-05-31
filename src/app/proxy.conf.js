const PROXY_CONFIG = [
    {
        context: [
            "/PaymentService/allLeaves",
            "/PaymentService/addLeaves",
            "/endpoints",
            "/i",
            "/need",
            "/to",
            "/proxy"
        ],
        target: "http://localhost:8081",
        secure: false
    }
]

module.exports = PROXY_CONFIG;