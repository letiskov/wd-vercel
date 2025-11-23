export default function handler(req, res) {
    // Bisa pake API Key juga kalau mau aman
    const API_KEY = "kontolkecap12";
    const key = req.headers["x-api-key"];

    if (key !== API_KEY) {
        return res.status(401).json({ error: "Invalid API Key" });
    }

    // DUMMY DATA WD
    const data = [
        { id: 1, username: "caca", bank: "BCA", amount: 250000 },
        { id: 2, username: "aldi", bank: "MANDIRI", amount: 500000 },
        { id: 3, username: "tremble", bank: "BNI", amount: 1000000 }
    ];

    return res.status(200).json(data);
}
