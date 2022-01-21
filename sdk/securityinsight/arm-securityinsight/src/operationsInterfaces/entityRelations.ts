/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  EntityRelationsGetRelationOptionalParams,
  EntityRelationsGetRelationResponse
} from "../models";

/** Interface representing a EntityRelations. */
export interface EntityRelations {
  /**
   * Gets an entity relation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param relationName Relation Name
   * @param options The options parameters.
   */
  getRelation(
    resourceGroupName: string,
    workspaceName: string,
    entityId: string,
    relationName: string,
    options?: EntityRelationsGetRelationOptionalParams
  ): Promise<EntityRelationsGetRelationResponse>;
}