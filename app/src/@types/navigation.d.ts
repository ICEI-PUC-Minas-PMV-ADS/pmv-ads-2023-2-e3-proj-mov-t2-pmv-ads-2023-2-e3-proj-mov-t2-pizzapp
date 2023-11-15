export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      homeClient: undefined;
      menuClient: undefined; 
      productClient: {
        product?: IProducts;
      };
      login: undefined;
      chart: undefined;
      orderClient: undefined;
      orderAdmin: undefined;
      homeAdmin: undefined;
      menuAdmin: undefined;
      productAdmin: {
        product?: IProducts;
        groupName?: string
        group?: IGroups
      };
    }
  }
}
