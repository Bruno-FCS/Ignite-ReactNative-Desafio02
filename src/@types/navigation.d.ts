export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      feedback: {
        type: FeedbackContentTypeStyleProps;
      };
      register: {
        type: RegisterScreenTypeProps;
      };
      meal: {
        name: string;
        description: string;
        date: string;
        time: string;
        fitsDiet: boolean;
      };
    }
  }
}
