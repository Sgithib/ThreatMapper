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
import type { ModelComputeMetrics } from './ModelComputeMetrics';
import {
    ModelComputeMetricsFromJSON,
    ModelComputeMetricsFromJSONTyped,
    ModelComputeMetricsToJSON,
} from './ModelComputeMetrics';

/**
 * 
 * @export
 * @interface ModelContainerImage
 */
export interface ModelContainerImage {
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    compliance_scan_status: string;
    /**
     * 
     * @type {number}
     * @memberof ModelContainerImage
     */
    compliances_count: number;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    docker_image_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    docker_image_size: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    docker_image_tag: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    malware_scan_status: string;
    /**
     * 
     * @type {number}
     * @memberof ModelContainerImage
     */
    malwares_count: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ModelContainerImage
     */
    metadata: { [key: string]: any; };
    /**
     * 
     * @type {ModelComputeMetrics}
     * @memberof ModelContainerImage
     */
    metrics: ModelComputeMetrics;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    node_name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    secret_scan_status: string;
    /**
     * 
     * @type {number}
     * @memberof ModelContainerImage
     */
    secrets_count: number;
    /**
     * 
     * @type {number}
     * @memberof ModelContainerImage
     */
    vulnerabilities_count: number;
    /**
     * 
     * @type {string}
     * @memberof ModelContainerImage
     */
    vulnerability_scan_status: string;
}

/**
 * Check if a given object implements the ModelContainerImage interface.
 */
export function instanceOfModelContainerImage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "compliance_scan_status" in value;
    isInstance = isInstance && "compliances_count" in value;
    isInstance = isInstance && "docker_image_name" in value;
    isInstance = isInstance && "docker_image_size" in value;
    isInstance = isInstance && "docker_image_tag" in value;
    isInstance = isInstance && "malware_scan_status" in value;
    isInstance = isInstance && "malwares_count" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "metrics" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_name" in value;
    isInstance = isInstance && "secret_scan_status" in value;
    isInstance = isInstance && "secrets_count" in value;
    isInstance = isInstance && "vulnerabilities_count" in value;
    isInstance = isInstance && "vulnerability_scan_status" in value;

    return isInstance;
}

export function ModelContainerImageFromJSON(json: any): ModelContainerImage {
    return ModelContainerImageFromJSONTyped(json, false);
}

export function ModelContainerImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelContainerImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compliance_scan_status': json['compliance_scan_status'],
        'compliances_count': json['compliances_count'],
        'docker_image_name': json['docker_image_name'],
        'docker_image_size': json['docker_image_size'],
        'docker_image_tag': json['docker_image_tag'],
        'malware_scan_status': json['malware_scan_status'],
        'malwares_count': json['malwares_count'],
        'metadata': json['metadata'],
        'metrics': ModelComputeMetricsFromJSON(json['metrics']),
        'node_id': json['node_id'],
        'node_name': json['node_name'],
        'secret_scan_status': json['secret_scan_status'],
        'secrets_count': json['secrets_count'],
        'vulnerabilities_count': json['vulnerabilities_count'],
        'vulnerability_scan_status': json['vulnerability_scan_status'],
    };
}

export function ModelContainerImageToJSON(value?: ModelContainerImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compliance_scan_status': value.compliance_scan_status,
        'compliances_count': value.compliances_count,
        'docker_image_name': value.docker_image_name,
        'docker_image_size': value.docker_image_size,
        'docker_image_tag': value.docker_image_tag,
        'malware_scan_status': value.malware_scan_status,
        'malwares_count': value.malwares_count,
        'metadata': value.metadata,
        'metrics': ModelComputeMetricsToJSON(value.metrics),
        'node_id': value.node_id,
        'node_name': value.node_name,
        'secret_scan_status': value.secret_scan_status,
        'secrets_count': value.secrets_count,
        'vulnerabilities_count': value.vulnerabilities_count,
        'vulnerability_scan_status': value.vulnerability_scan_status,
    };
}

