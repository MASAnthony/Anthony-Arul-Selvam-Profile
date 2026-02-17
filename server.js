import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Debugging: Log all requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

console.log(`__dirname: ${__dirname}`);
console.log(`Serving static files from: ${path.join(__dirname, 'dist')}`);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist'), {
    setHeaders: (res, filePath) => {
        console.log(`Serving file: ${filePath}`);
        if (filePath.endsWith('.js') || filePath.endsWith('.mjs')) {
            console.log('Setting JS content type');
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// Handle React routing, return all requests to index.html
app.use((req, res) => {
    console.log('Serving index.html for unknown route');
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
