// @flow

import toH from 'hast-to-hyperscript'
import * as React from 'react'

export type Options = {
  components?: ComponentList,
  rules?: Rule[]
}

export type Rule = {
  match: (tag: string, props: ?Object, children: React.Node) => ?boolean,
  component: React.ComponentType<*>
}

export type ComponentList = {
  [string]: React.ComponentType<*> | string
}

/**
 * Converts hast to React nodes. This is a reimplementation of `rehype-react`
 * with support for rule sets.
 */

const toReact = ({ components, rules }: Options = {}) => {
  const createElement = (tag: string, props: Object, children: React.Node) => {
    let component
    if (components && components[tag]) {
      component = components[tag]
    } else if (rules && rules.length) {
      component = rules.reduce(
        (result, { match, component }: Rule) =>
          result || (match(tag, props, children) && component),
        null
      )
    }
    return React.createElement(component || tag, props, children)
  }
  return (ast: any): React.Node => toH(createElement, ast)
}

export default toReact
