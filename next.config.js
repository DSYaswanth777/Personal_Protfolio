/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'index, follow', // Adjust as per your requirements
            },
          ],
        },
      ];
    },
    webpack: (config, { isServer }) => {
        // Generate source maps for both client and server-side code
        if (!isServer) {
          config.devtool = 'source-map';
        }
    
        return config;
      },
  };
  