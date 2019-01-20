// @flow

import * as React from 'react'
import CardWaypoint, { State } from './CardWaypoint'
import CSS from './H2Section.module.css'
import cn from 'classnames'
import slugger from 'github-slugger'

export interface Props {
  children: React.ReactNode
  className: string | string[]
}

const H2Section = ({ children, className }: Props) => {
  return (
    <CardWaypoint>
      {({ entered }: State) => {
        const activeClass = entered ? '-active' : '-inactive'
        const title = getH2Text(children)
        const id = title ? slugger().slug(title) : null

        return (
          <section className={cn(CSS.root, className, activeClass)} id={id}>
            {children}
          </section>
        )
      }}
    </CardWaypoint>
  )
}

function getH2Text(children: React.ReactNode): string | void {
  if (!Array.isArray(children)) return

  const childrenList = children as JSX.Element[]
  const h2 = childrenList.find(node => node.type === 'h2')
  if (!h2) return

  return ((h2 && h2.props && h2.props.children) || []).join('')
}

export default H2Section
