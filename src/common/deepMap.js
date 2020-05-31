import { Children, cloneElement, isValidElement } from 'react';

export const hasChildren = (element) => isValidElement(element) && Boolean(element.props.children);

export const hasComplexChildren = (element) =>
  isValidElement(element) &&
  hasChildren(element) &&
  Children.toArray(element.props.children).reduce(
    (response, child) => response || isValidElement(child),
    false
  );

const deepMap = (children, deepMapFn) => {
  return Children.map(children, (child) => {
    if (isValidElement(child) && hasComplexChildren(child)) {
      // Clone the child that has children and map them too
      return deepMapFn(
        cloneElement(child, {
          ...child.props,
          children: deepMap(child.props.children, deepMapFn),
        })
      );
    }
    return deepMapFn(child);
  });
};

export default deepMap;
