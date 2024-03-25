import React, { Suspense } from "react";
import "./App.scss";

import TopNavComponent from 'TopNav/TopNav';
import ItemDetailsComponent from 'ItemDetails/ItemDetails';

import { importRemote } from "module-federation-import-remote";

const LeftNavComponent = React.lazy(() => importRemote({ url: "http://localhost:3002", scope: "leftNavigation", module: "LeftNav" }));

export default function () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <TopNavComponent />
        <div className="flex">
          <LeftNavComponent />
          <ItemDetailsComponent />
        </div>
      </section>
    </Suspense>
  );
}
