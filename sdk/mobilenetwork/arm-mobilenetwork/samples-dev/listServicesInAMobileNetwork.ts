/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Gets all the services in a mobile network.
 *
 * @summary Gets all the services in a mobile network.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-01-01-preview/examples/ServiceListByMobileNetwork.json
 */
import { MobileNetworkManagementClient } from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";

async function listServicesInAMobileNetwork() {
  const subscriptionId = "subid";
  const resourceGroupName = "testResourceGroupName";
  const mobileNetworkName = "testMobileNetwork";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.services.listByMobileNetwork(
    resourceGroupName,
    mobileNetworkName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listServicesInAMobileNetwork().catch(console.error);