module.exports = {
  siteMetadata: {
    brandName: 'Happy Relationships',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-lottie'],
      },
    },
  ],
};
