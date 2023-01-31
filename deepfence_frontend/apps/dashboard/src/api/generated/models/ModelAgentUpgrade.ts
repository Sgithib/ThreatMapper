/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelAgentUpgrade
 */
export interface ModelAgentUpgrade {
    /**
     * 
     * @type {string}
     * @memberof ModelAgentUpgrade
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelAgentUpgrade
     */
    version: string;
}

/**
 * Check if a given object implements the ModelAgentUpgrade interface.
 */
export function instanceOfModelAgentUpgrade(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function ModelAgentUpgradeFromJSON(json: any): ModelAgentUpgrade {
    return ModelAgentUpgradeFromJSONTyped(json, false);
}

export function ModelAgentUpgradeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelAgentUpgrade {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'node_id': json['node_id'],
        'version': json['version'],
    };
}

export function ModelAgentUpgradeToJSON(value?: ModelAgentUpgrade | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'node_id': value.node_id,
        'version': value.version,
    };
}

