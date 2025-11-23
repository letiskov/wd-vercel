export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { username, password } = req.body;

    const ADMIN_USER = process.env.ADMIN_USER;
    const ADMIN_PASS = process.env.ADMIN_PASS;

    if (username === ADMIN_USER && password === ADMIN_PASS) {
        return res.status(200).json({ status: "OK" });
    }

    return res.status(200).json({
        status: "ERROR",
        message: "Password atau username salah."
    });
}
