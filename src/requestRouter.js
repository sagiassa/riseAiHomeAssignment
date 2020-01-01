/**
 * This file gets different types of GET request
 * Extracts the storeId from the GET request 
 * Sends the storeId to the requestsAssociate class that handles the request
 */


const express = require('express')
const router = express.Router()


let main = new requestsAssociate(4);

/**
 * A router that gets request in the following format :
 * https://rise-ai.com/api/v1/campaigns?storeId=174fba39-8054-4ab8-8599-6ad2d93351f4 
*/
router.get('/api/v1/campaigns', function (req, res) {
    const storeId = req.query.storeId
    main.handleRequest(storeId)
    res.end()
})

/**
 * A router that gets request in the following format :
 * https://rise-ai.com/api/v1/storeId/174fba39-8054-4ab8-8599-6ad2d93351f4/giftCard 
*/
router.get('/api/v1/storeId/:storeId', function (req, res) {
    const storeId = req.params.storeId
    main.handleRequest(storeId)
    res.end()
})

/**
 * A router that gets request in the following format:
 * GET /api/v1/settings HTTP/1.1
 */
router.get('/api/v1/settings', function (req, res) {
    const storeId = req.storeId
    main.handleRequest(storeId)
    res.end()
})