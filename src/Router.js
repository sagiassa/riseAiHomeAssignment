class Router {
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
                if (!this.Execution[i]){ // if it's empty
                    this.addToService(storeId)
                    console.log("first one added:" + storeId)
                    found = true
                }
                if (this.Execution[i].service.find(i => i == storeId)) {
                    console.log("Execution from Service " + i)
                    found = true
                } 
                
            }
            if(!found){
                this.addToService(storeId)
            }
        
    }

    addToService = (storeId) => {

        let n = this.state.serviceNumber
        if ( this.Execution[n] ) {
            this.Execution[n].service.push(storeId)
            console.log("Execution from Service " + (n+1))
            console.log(this.Execution)
        }
        else {
            this.Execution[n] = { service : [] }
            this.Execution[n].service.push(storeId)
            console.log("Execution from Service " + (n+1) )
        }
        this.state.serviceNumber = (n+1)%this.state.numberOfServers
        console.log(this.state.serviceNumber)
    }
}