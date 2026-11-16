import { INodeParams, INodeCredential } from '../src/Interface'

class ApifyApiCredential implements INodeCredential {
    label: string
    name: string
    version: number
    description: string
    inputs: INodeParams[]

    constructor() {
        this.label = 'Apify API'
        this.name = 'apifyApi'
        this.version = 1.0
        this.description =
            'Create an API token for Flowise in <a target="_blank" href="https://console.apify.com/settings/integrations?createApiToken=true&for=Flowise&utm_source=flowise&utm_medium=integrations">Apify Console</a> and copy it right after creating it — it is shown only once.'
        this.inputs = [
            {
                label: 'Apify API',
                name: 'apifyApiToken',
                type: 'password'
            }
        ]
    }
}

module.exports = { credClass: ApifyApiCredential }
