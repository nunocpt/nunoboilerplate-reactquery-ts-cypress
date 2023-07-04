export interface Error {
   response?: {
      data?: {
        details?: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } | any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } | any;
}



export interface IData {
   labels: string[];
   name: string;
   values: number[];
}



export interface useIntersectionObserverProps {
   root: any;
   target: React.MutableRefObject<undefined>;
   onIntersect: any;
   threshold: number;
   rootMargin: string;
   enabled: boolean;
}



export interface IErrorObject {
   title: boolean;
   tags?: boolean;
   content?: boolean;
}


export interface IMetaDataRow {
   metaDataKey: string;
   mappedAttribute: string;
   type: string;
   values: string[];
}
export interface IMetaData {
   category: {
      BasicInformation: IMetaDataRow[];
      DetailedSections: IMetaDataRow[];
      Facts: IMetaDataRow[];
   };
}



export interface ILazyLoadingACS {
   [x: string]: any;
   totalCount: number;
   coverage?: number;
   facets?: unknown;
   nextPageParameters: {
      includeTotalCount: boolean;
      skip: number;
      top: number;
      facets?: string;
      highlight?: string;
      highlightPostTag?: string;
      highlightPreTag?: string;
      minimumCoverage?: number;
      orderby?: string;
      queryType?: string;
      scoringParameters?: string[];
      scoringProfile?: string;
      scoringStatistics?: string;
      search?: string;
      searchMode?: string;
      searchFields?: string;
      select?: string;
   };
   values: unknown[];
}