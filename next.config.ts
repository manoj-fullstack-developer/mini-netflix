import type { NextConfig } from 'next'
import TerserPlugin from 'terser-webpack-plugin'

const nextConfig: NextConfig = {
    images: {
        loader: 'default',
        remotePatterns: [{ hostname: 'm.media-amazon.com' }],
    },
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    webpack(config, { isServer }) {
        if (!isServer) {
            config.optimization.minimize = true
            config.optimization.minimizer = [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true,
                        },
                        output: {
                            comments: false,
                        },
                    },
                }),
            ]
        }

        return config
    },
}

export default nextConfig
