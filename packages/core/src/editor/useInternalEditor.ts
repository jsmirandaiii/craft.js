import { useCollector, wrapConnectorHooks } from '@craftjs/utils';
import { useContext, useMemo } from 'react';

import { EditorContext } from './EditorContext';

import { EditorState } from '../interfaces';
import { EditorStore } from '../store';

export type EditorCollector<C> = (
  state: EditorState,
  query: EditorStore['query']
) => C;

export function useInternalEditor<C = null>(collector?: EditorCollector<C>) {
  const { store } = useContext(EditorContext);
  const handlers = store.handlers;

  const collected = useCollector(
    store,
    collector ? (state: EditorState) => collector(state, store.query) : null
  );

  const connectors = useMemo(
    () => handlers && wrapConnectorHooks(handlers.connectors),
    [handlers]
  );

  const actions = useMemo(() => store.actions, [store]);
  const query = useMemo(() => store.query, [store]);

  return {
    ...collected,
    actions,
    query,
    connectors,
    inContext: !!store,
    store,
  };
}
