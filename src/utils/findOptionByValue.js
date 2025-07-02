/**
 * 根据 value 从多层嵌套的 options 数据中查找配置
 * @param {string} value - 要查找的值
 * @param {Array} options - 选项数组，可能包含嵌套的 children
 * @returns {Object|null} 找到的配置对象，包含 label、value、icon 等属性，如果未找到返回 null
 */
export default function findOptionByValue(value, options) {
  if (!Array.isArray(options) || !value) {
    return null;
  }

  for (const option of options) {
    // 检查当前选项是否匹配
    if (option.value === value) {
      return option;
    }

    // 如果有子选项，递归查找
    if (Array.isArray(option.children)) {
      const found = findOptionByValue(value, option.children);
      if (found) {
        return found;
      }
    }
  }

  return null;
}
