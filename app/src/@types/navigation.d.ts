export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      homeClient: undefined;
      homeAdmin: undefined;
      login: undefined;
      menu: undefined;
      chart: undefined;
      order: undefined;
      menuAdmin: undefined;
      productAdmin: {
        product?: IProducts;
        groupName?: string
        group?: IGroups
      };
    }
  }
}
