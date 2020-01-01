class requestsAssociate {
    /**
     * initializaing the serviceNumber and numberOfServer
     * Building a data stracture - Execution at the size of numberOfServers
     */
    constructor(n) {
        this.state = {
            serviceNumber: 0,
            numberOfServers : n
        }
        this.Execution = new Array(n) 
    }

    handleRequest = (storeId) => {
        let found = false
        const numberOfServers = this.state.numberOfServers
            for (let i = 0; i < numberOfServers && !found; i++) {
                if (!this.Execution[i]){ // checks if the place in execution is empty
                    this.addToService(storeId) // adds the first value to the service
                    // console.log("first one added:" + storeId)
                    found = true
                }
                else if (this.Execution[i].service.find(i => i == storeId)) { // checks if that storeId is already in any service execution
                    console.log("Executes from Service " + (i+1) + " for storeId - " + storeId)
                    found = true
                } 
                
            }
            if(!found){ // it's a new storeId
                this.addToService(storeId) // addin the storeId to a service Execution
            }
        
    }

    addToService = (storeId) => {
        let n = this.state.serviceNumber
        if( !this.Execution[n]){// the execution service is empty
            this.Execution[n] = { service : [] } // adding an object inside the execution service
        }
        this.Execution[n].service.push(storeId) // adds a new storeId t that execution service
        console.log("Executes from Service " + (n+1)+ " for storeId - " + storeId)
        this.state.serviceNumber = (n+1)%this.state.numberOfServers // initializing the service number to habdle the next request
    }
}