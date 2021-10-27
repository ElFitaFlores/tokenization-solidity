const TokenSale = artifacts.require('MyTokenSale')
const Token = artifacts.require('MyToken')

const chai = require('./setupChai')
const BN = web3.utils.BN
const expect = chai.expect

require('dotenv').config({path: '../.env'})

contract('TokenSale test', async (accounts) => {
    const [deployerAccount, recipient, anotherAccount] = accounts

    it('should not have any tokens in my deployerAccount', async ()=> {
        let instance = await Token.deployed()
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(new BN(0))
    })
})