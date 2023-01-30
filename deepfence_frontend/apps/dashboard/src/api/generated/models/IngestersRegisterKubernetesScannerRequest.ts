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
 * @interface IngestersRegisterKubernetesScannerRequest
 */
export interface IngestersRegisterKubernetesScannerRequest {
    /**
     * 
     * @type {string}
     * @memberof IngestersRegisterKubernetesScannerRequest
     */
    kubernetes_cluster_name?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersRegisterKubernetesScannerRequest
     */
    node_id?: string;
}

/**
 * Check if a given object implements the IngestersRegisterKubernetesScannerRequest interface.
 */
export function instanceOfIngestersRegisterKubernetesScannerRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IngestersRegisterKubernetesScannerRequestFromJSON(json: any): IngestersRegisterKubernetesScannerRequest {
    return IngestersRegisterKubernetesScannerRequestFromJSONTyped(json, false);
}

export function IngestersRegisterKubernetesScannerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IngestersRegisterKubernetesScannerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kubernetes_cluster_name': !exists(json, 'kubernetes_cluster_name') ? undefined : json['kubernetes_cluster_name'],
        'node_id': !exists(json, 'node_id') ? undefined : json['node_id'],
    };
}

export function IngestersRegisterKubernetesScannerRequestToJSON(value?: IngestersRegisterKubernetesScannerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kubernetes_cluster_name': value.kubernetes_cluster_name,
        'node_id': value.node_id,
    };
}
