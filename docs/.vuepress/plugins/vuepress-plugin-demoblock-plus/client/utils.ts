/** @format */

import { unref, ref } from 'vue';

export function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}
export function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}
function _stripTemplate(content) {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}
export function stripTemplate(content) {
  const result = _stripTemplate(content);
  if (result.indexOf('<template>') === 0) {
    const html = result.replace(/^<template>/, '').replace(/<\/template>$/, '');
    return html
      .replace(/^[\r?\n|\r]/, '')
      .replace(/[\r?\n|\r]$/, '')
      .trim();
  }
  return result;
}


function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(
        filter(() => fn.apply(this, args), { fn, thisArg: this, args })
      )
        .then(resolve)
        .catch(reject);
    });
  }
  return wrapper;
}

const noop = () => {};

function resolveUnref(r) {
  return typeof r === 'function' ? r() : unref(r);
}

function throttleFilter(
  ms,
  trailing = true,
  leading = true,
  rejectOnCancel = false
) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector: any = noop;
  let lastValue;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = resolveUnref(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return (lastValue = _invoke());
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => (isLeading = true), duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}

export function useThrottleFn(
  fn,
  ms = 200,
  trailing = false,
  leading = true,
  rejectOnCancel = false
) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}
