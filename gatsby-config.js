/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'DAPP',
        author: 'Patrick W. McMahon',
        tokenPrice: 0.05, //price in Eth
        tokenSupply: 750000,
        icoStart: 10000, //start time in blocks 
        icoEnd: false, //end time in blocks, false if end when supply is all sold.
        networks: {
            mainNet: {
                tokenAddress: '0xd00981105e61274c8a5cd5a88fe7e037d935b513',
                tokenSymbol: 'DAPP',
                tokenDecimals: 18,
                tokenImage: 'http://placekitten.com/200/300'
            }
        }

    },
    plugins: [],
}