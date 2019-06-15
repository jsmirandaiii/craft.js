import React, { ReactNode, HTMLProps } from "react";
import { Node, NodeId, Nodes } from "~types";
import Canvas from ".";
import { defineReactiveProperty, TextNode, createNode } from "~src/utils";
const shortid = require("shortid");

export const mapChildrenToNodes = (children: ReactNode, parent?: NodeId, hardId?: string, cb?: Function): Nodes => {
  return React.Children.toArray(children).reduce(
    (result: Nodes, child: React.ReactElement | string) => {
      if (typeof (child) === "string") {
        child = <TextNode text={child} />
      }

      let { type, props } = child;
      const prefix = (type as Function) === Canvas ? "canvas" : "node";
      const id = hardId ? hardId : `${prefix}-${shortid.generate()}`;

      let node = createNode(type as React.ElementType, props, id, parent);
      result[node.id] = node;
      if ( cb ) cb(node);
      return result;
    },
    {}
  ) as Nodes;
};


export const makePropsReactive = (nodes: Nodes, cb: Function) => {
  Object.keys(nodes).forEach(id => {
    const node = nodes[id];
    let {props} = node;
    const reactiveProps = Object.keys(props).reduce((result: any, key) => {
      const value = (props as any)[key];
      if ( key !== "children" ) {
        defineReactiveProperty(result, key, value, () => {
          cb()
        });
      } else {
        result[key] = value
      }

      return result;
    }, {});
    node.props = reactiveProps;
  })
}