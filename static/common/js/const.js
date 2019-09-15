

let bindToGlobal = (key='String', value='var') => {
  if (typeof window._const === 'undefined') {
    window._const = {};
  }
    window._const[key] = value;
}

bindToGlobal('ERR_OK', 0);


