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
 * This sample demonstrates how to The operation to delete the extension.
 *
 * @summary The operation to delete the extension.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/stable/2021-05-20/examples/DELETEExtension.json
 */
const { HybridComputeManagementClient } = require("@azure/arm-hybridcompute");
const { DefaultAzureCredential } = require("@azure/identity");

async function deleteAMachineExtension() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "myResourceGroup";
  const machineName = "myMachine";
  const extensionName = "MMA";
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.machineExtensions.beginDeleteAndWait(
    resourceGroupName,
    machineName,
    extensionName
  );
  console.log(result);
}

deleteAMachineExtension().catch(console.error);