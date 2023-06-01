import {VueLoaderPlugin} from "vue-loader"

export default {
    mode: 'development',
    entry: `/src/app.vue`,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'ts',
                    target: 'esnext'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
    },

    stats: {
        errorDetails: true,
    },
}