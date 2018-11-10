/*
 * BlogPostContent
 * ===============
 *
 * Blog post content
 */

import React from 'react'
import PostContent from './PostContent'
import css from 'styled-jsx/css'

/**
 * Blog post content.
 *
 * @example
 *     <BlogPostContent htmlAst={htmlAst} />
 */

const BlogPostContent = ({ htmlAst }) => {
  return (
    <div className="blog-post-content">
      <PostContent htmlAst={htmlAst} />
      <style jsx>{style}</style>
    </div>
  )
}

/*
 * Styles
 */

const style = css.global`
  @import 'src/styles/variables.css';

  .blog-post-content {
    & {
      @apply --body-font;
      font-size: 16.5px;
      font-weight: 500;
      line-height: 1.55;
      color: var(--text-color);
    }

    & a,
    & a:visited {
      @apply --em-style;
      color: var(--text-color);
      text-decoration: none;
      white-space: nowrap;
    }

    & a::after {
      content: '#';
      display: inline-block;
      font-size: 0.8em;
      font-weight: bold;
      width: 14px;
      height: 14px;
      line-height: 14px;
      text-align: center;
      margin: 0 4px;
      border-radius: 50%;
      background: var(--accent);
      color: white;
    }

    & em {
      @apply --em-style;
    }

    & strong {
      background: var(--accent);
      font-weight: normal;
    }

    & p,
    & ul,
    & ol,
    & pre,
    & h3 {
      margin-top: 1.5em;
      margin-bottom: 1.5em;
    }

    & h3 + p {
      margin-top: -1.5em;
    }

    & pre {
      background: white;
      /* color: #458; */
      box-shadow: inset 0 0 0 2px var(--accent);
      /* box-shadow: inset 0 0 0 2px var(--accent), 0 12px 18px color-mod(var(--accent) alpha(8%)); */
      margin: 2.5em 0;
      line-height: 1.4;
      padding: 24px;
      border-radius: 4px;
      font-size: 0.86em;
    }

    & code {
      @apply --code-font;
      padding: 0.2em 0.2em;
      font-size: 0.9em;
      background: var(--code-background);
      background: color-mod(var(--accent));
    }

    & pre code {
      background: transparent;
      padding: 0;
      font-size: 1em;
    }
  }
`

export default BlogPostContent
