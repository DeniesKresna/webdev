import express from 'express'

export const bodyParserMiddleware = express.json();

export const badJsonHandlerMiddleware = (err, req, res, next) => {
    // @ts-ignore
    if(err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Bad JSON:', err.message);
        return res.status(400).json({
            success: false,
            message: 'Invalid JSON format in request body'
        });
    }
}