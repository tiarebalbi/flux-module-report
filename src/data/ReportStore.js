/*
 * Copyright 2018 Tiarê Balbi Bonamini
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @flow

import Immutable from "immutable";
import { ReduceStore } from "flux/utils";

import ReportDispatcher from "./ReportDispatcher";
import ReportActionTypes from "./ReportActionTypes";
import Counter from "./Counter";
import Report from "./Report";

import type { ReportStateType, ReportType } from "../types";

class ReportStore extends ReduceStore<ReportType, ReportStateType> {
  constructor() {
    super(ReportDispatcher);
  }

  getInitialState(): ReportStateType {
    return Immutable.OrderedMap();
  }

  reduce(state: ReportStateType, action: Object): ReportStateType {
    switch (action.type) {
      case ReportActionTypes.ADD_REPORT:
        if (!action.metrics) return state;

        const id = Counter.increment();
        return state.set(
          id,
          new Report({
            id,
            date: new Date(),
            metrics: action.metrics
          })
        );

      case ReportActionTypes.EDIT_REPORT:
        return state.setIn([action.id, "metrics"], action.metrics);

      case ReportActionTypes.DELETE_REPORT:
        return state.delete(action.id);

      default:
        return state;
    }
  }
}

export default new ReportStore();
