
const express = require('express');

const app = express();
const port = process.env.PORT || 6000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

const Web3 = require('web3');
const ethers = require('ethers');
app.post("/signup", async (req, res) => {
    try {
        const address = req.body.address;
        const infuraProjectId = YOUR INFURA API KEY HERE ;
        const ropstenAddress = address;
        const web3 = new Web3(new Web3.providers.HttpProvider(
            'https://rinkeby.infura.io/v3/' + infuraProjectId
        ));

        var balance = await web3.eth.getBalance(ropstenAddress)
        const ethValue = ethers.utils.formatEther(balance);
        console.log(ethValue);
        res.status(201).json(ethValue);
     
    } catch (e) {
        console.log("sor", e)
        res.status(400).json(e)
    }
})


app.listen(port, () => {
    console.log('server running')
})