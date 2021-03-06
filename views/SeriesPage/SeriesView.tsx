import React from "react";
import {
  FullViewLayout,
  FullView,
  MorePanel,
  RightSide,
} from "../../tab-utils/views/FullViewWrapper";
import "./time-counter.css";
import { TimeCounterList } from "./TimeCounterList";

export { SeriesView };

function SeriesView() {
  return (
    <FullViewLayout>
      <RightSide>
        <FullView>
          <Content />
        </FullView>
        <MorePanel>
          <div>Hello</div>
        </MorePanel>
      </RightSide>
    </FullViewLayout>
  );
}

function Content() {
  if (typeof window === "undefined") {
    return null;
  }
  const time_counter_list = new TimeCounterList({ list_id: "series-page" });
  return (
    <time_counter_list.view style={{ width: "100vw", minHeight: "100vh" }} />
  );
}
