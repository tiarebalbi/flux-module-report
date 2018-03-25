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

import type { Dispatcher } from 'flux';
import type React from 'react';

type DispatchToken = string;

type ContainerOptions = {
  pure?: ?boolean,
  withProps?: ?boolean,
  withContext?: ?boolean,
};

declare module 'flux/utils' {
  declare class Store<TPayload> {
    constructor(dispatcher: Dispatcher<TPayload>): void;
    addListener(callback: (eventType?: string) => void): { remove: () => void };
    getDispatcher(): Dispatcher<TPayload>;
    getDispatchToken(): DispatchToken;
    hasChanged(): boolean;
  }

  declare class ReduceStore<TPayload, TState> extends Store<TPayload> {
    getState(): TState;
    getInitialState(): TState;
    reduce(state: TState, action: TPayload): TState;
    areEqual(one: TState, two: TState): boolean;
  }

  // This isn't really a class, just a simple object. Not sure how to put that
  // in declare module.
  declare class Container {
    static create<Props, State>(
      base: React.Element<State>,
      options?: ?ContainerOptions,
    ): React.Class<Props>;

    static createFunctional<Props, State>(
      viewFn: (props: State) => React.Element<Props>,
      getStores: (props?: ?Props, context?: any) => Array<Store<any>>,
      calculateState: (
        prevState?: ?State,
        props?: ?Props,
        context?: any,
      ) => State,
      options?: ContainerOptions,
    ): React.Class<Props>;
  }
}
