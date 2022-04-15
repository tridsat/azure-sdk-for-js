/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ConnectionSetting, AzureBotService } from "@azure/arm-botservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates a Connection Setting registration for a Bot Service
 *
 * @summary Updates a Connection Setting registration for a Bot Service
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/preview/2021-05-01-preview/examples/UpdateConnection.json
 */
async function updateConnectionSetting() {
  const subscriptionId = "subscription-id";
  const resourceGroupName = "OneResourceGroupName";
  const resourceName = "samplebotname";
  const connectionName = "sampleConnection";
  const parameters: ConnectionSetting = {
    etag: "etag1",
    location: "global",
    properties: {
      clientId: "sampleclientid",
      clientSecret: "samplesecret",
      parameters: [
        { key: "key1", value: "value1" },
        { key: "key2", value: "value2" }
      ],
      scopes: "samplescope",
      serviceProviderDisplayName: "serviceProviderDisplayName",
      serviceProviderId: "serviceproviderid"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.botConnection.update(
    resourceGroupName,
    resourceName,
    connectionName,
    parameters
  );
  console.log(result);
}

updateConnectionSetting().catch(console.error);