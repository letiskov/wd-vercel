export default async function handler(req, res) {
    // CORS FIX — IZINKAN REQUEST DARI SEMUA DOMAIN
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");

    // Handle preflight OPTIONS
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const API_KEY = "kontolkecap12";
    const key = req.headers["x-api-key"];

    if (key !== API_KEY) {
        return res.status(401).json({ message: "Invalid API Key" });
    }

    let body = {};

    try {
        // Vercel sometimes parses JSON automatically, kadang tidak
        body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    } catch (e) {
        return res.status(400).json({ message: "Invalid JSON" });
    }

    const { username, bank, amount } = body;

    if (!username || !bank || typeof amount !== "number") {
        return res.status(400).json({ message: "Bad payload" });
    }

    return res.status(200).json({
        status: "OK",
        saved: { username, bank, amount }
    });
}
