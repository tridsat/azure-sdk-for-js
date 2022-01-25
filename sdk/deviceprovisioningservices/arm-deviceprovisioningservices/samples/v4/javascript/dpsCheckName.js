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
 * This sample demonstrates how to Check if a provisioning service name is available. This will validate if the name is syntactically valid and if the name is usable
 *
 * @summary Check if a provisioning service name is available. This will validate if the name is syntactically valid and if the name is usable
 * x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/stable/2021-10-15/examples/DPSCheckNameAvailability.json
 */
const { IotDpsClient } = require("@azure/arm-deviceprovisioningservices");
const { DefaultAzureCredential } = require("@azure/identity");

async function dpsCheckName() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const arguments = { name: "test213123" };
  const credential = new DefaultAzureCredential();
  const client = new IotDpsClient(credential, subscriptionId);
  const result = await client.iotDpsResource.checkProvisioningServiceNameAvailability(arguments);
  console.log(result);
}

dpsCheckName().catch(console.error);