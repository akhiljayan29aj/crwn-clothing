import { CollectionsActionType } from "./collections.types";

export const updateCollections = (collectionsMap) => ({
  type: CollectionsActionType.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
