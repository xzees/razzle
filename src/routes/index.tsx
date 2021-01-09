import { Provider } from "mobx-react";
import React from "react";
import Routes from "routes/routes";
import RootStore from "stores";

export default (props: any) => {
  const rootStore = RootStore.default;
  return (
    <Provider stores={rootStore}>
      <Routes {...props} />
    </Provider>
  );
};
