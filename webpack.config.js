const path = require('path');

module.exports = {
    entry: './src/index.js', // ścieżka do głównego pliku JavaScript
    output: {
        filename: 'bundle.js', // nazwa wyjściowego pliku
        path: path.resolve(__dirname, 'dist'), // ścieżka do katalogu wyjściowego
    },
    mode: 'development', // lub 'production'
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // lub inny odpowiedni loader
                },
            },
        ],
    },
    // dodaj inne ustawienia, takie jak pluginy itp.
};

