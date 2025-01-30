import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterView from './view/CounterView';
import { interval } from 'rxjs';
import { filter, takeWhile } from 'rxjs/operators';
import { state$, increment } from './intent/CounterIntent';

interval(1100)
  .pipe(
    filter(() => state$.value.isAutoIncrementEnabled),
    takeWhile(() => state$.value.count < 98)
  )
  .subscribe(() => increment());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterView />
  </React.StrictMode>
);