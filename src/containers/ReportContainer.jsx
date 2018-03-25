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
import { Container } from 'flux/utils';

import ReportStore from '../data/ReportStore';
import ReportActions from '../data/ReportActions';
import ReportView from '../views/ReportView';

function getStores() {
  return [
    ReportStore,
  ];
}

function getState() {
  return {
    reports: ReportStore.getState(),

    onAdd: ReportActions.addReport,
    onEdit: ReportActions.editReport,
    onDelete: ReportActions.deleteReport,
  };
}

export default Container.createFunctional(ReportView, getStores, getState);
