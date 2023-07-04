import { ILazyLoadingACS } from "interfaces";

export const lazyLoadingACS = (data: ILazyLoadingACS) => {
  const response = data;
  const totalNumOfPages = Math.ceil(
    response.totalCount / response.nextPageParameters.top
  );
  const currentPageIndex =
    response.nextPageParameters.skip / response.nextPageParameters.top;
  let nextId = 0 as number | null;
  if (currentPageIndex >= totalNumOfPages - 1) {
    // the -1 in the end is to account for page index starting at 0
    nextId = null;
  } else {
    nextId = currentPageIndex + 1;
  }
  
  const modifiedResponse = {
    data: response.values,
    facets: response.facets,
    nextId: nextId,
    totalCount: response.totalCount,
    numberOfElementsInThisPage: response.values.length
  };

  return modifiedResponse;
};