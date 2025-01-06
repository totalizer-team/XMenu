export default function hasSelectedNode(fn, data) {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  if (fn(data) === true) {
    return true;
  }

  if (Array.isArray(data.children)) {
    for (const child of data.children) {
      if (hasSelectedNode(fn, child)) {
        return true;
      }
    }
  }

  return false;
}
