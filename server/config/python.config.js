import { spawn } from "child_process";
import path from "path";

export const runChatbot = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required." });
    }

    const scriptPath = path.resolve("utils", "chatbot.py");
    const pythonProcess = spawn("python", [scriptPath, message]);

    let result = "";
    let errorOutput = "";

    pythonProcess.stdout.on("data", (data) => {
        result += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
        errorOutput += data.toString();
    });

    pythonProcess.on("close", (code) => {
        if (code !== 0) {
            console.error(`Python error: ${errorOutput}`);
            return res.status(500).json({ error: "Internal Python error.", details: errorOutput });
        }

        try {
            const parsed = JSON.parse(result.trim());
            res.json(parsed);
        } catch (err) {
            console.error("Failed to parse Python output:", err.message);
            res.status(500).json({ error: "Invalid response from Python script." });
        }
    });
};

export const runRecommender = async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ error: "User ID is required." });
    }

    const scriptPath = path.resolve("utils", "recommend.py");
    const pythonProcess = spawn("python", [scriptPath, userId]);

    let result = "";
    let errorOutput = "";

    pythonProcess.stdout.on("data", (data) => {
        result += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
        errorOutput += data.toString();
    });

    pythonProcess.on("close", (code) => {
        if (code !== 0) {
            console.error(`Python error: ${errorOutput}`);
            return res.status(500).json({ error: "Internal Python error.", details: errorOutput });
        }

        try {
            const parsed = JSON.parse(result.trim());
            res.json(parsed);
        } catch (err) {
            console.error("Failed to parse Python output:", err.message);
            res.status(500).json({ error: "Invalid response from Python script." });
        }
    });
};