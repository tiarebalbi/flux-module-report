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

import ReportDispatcher from "./ReportDispatcher";
import ReportActionTypes from "./ReportActionTypes";

import type { Metric } from "../types";

const ReportActions = {
  addReport(metrics: Array<Metric>) {
    ReportDispatcher.dispatch({
      type: ReportActionTypes.ADD_REPORT,
      metrics
    });
  },
  editReport(id: string, metrics: Array<Metric>) {
    ReportDispatcher.dispatch({
      type: ReportActionTypes.EDIT_REPORT,
      id,
      metrics
    });
  },
  deleteReport(id: string) {
    ReportDispatcher.dispatch({
      type: ReportActionTypes.DELETE_REPORT,
      id
    });
  }
};

export default ReportActions;
