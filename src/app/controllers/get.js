
module.exports = (request , response) => {
    response.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Rota padrão</h1>
            </body>
        </html>
    `);
}