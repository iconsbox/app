import React from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SyntaxHighlighter from "react-syntax-highlighter";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { atomOneLight as theme } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {
  makeComponentPath,
  makeComponentText,
  makeInstallText,
  makeSpritePath,
  makeSvgPath,
} from "../../../../../Helpers";
import { StyledTabsWrapper } from "./styles";

type Props = {
  pack: string;
  icon: string;
};

function Usage({ pack, icon }: Props) {
  const globalDescription = (
    <div className="install-message">
      At first you need to install{" "}
      <span className="code package-name2">{pack}</span> with one of this ways:
      <SyntaxHighlighter language="bash" style={theme}>
        {makeInstallText(pack)}
      </SyntaxHighlighter>
      then you can use it in your code:
    </div>
  );

  const footer = (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className="edit-on-github"
      href="https://github.com/iconsbox/app"
      title="edit-on-github"
      target="_blank"
      rel="noreferrer"
    >
      Edit on Github
    </a>
  );

  return (
    <StyledTabsWrapper>
      <h2>How to use {pack}</h2>
      <TabList>
        <Tab key="react">React</Tab>
        <Tab key="react-sprite">React Sprite</Tab>
        <Tab key="svg">SVG file</Tab>
        <Tab key="react-native" disabled>
          ReactNative
        </Tab>
        <Tab key="vue" disabled>
          Vue
        </Tab>
        <Tab key="svelte" disabled>
          Svelte
        </Tab>
        <Tab key="angular" disabled>
          Angular
        </Tab>
      </TabList>

      <TabPanel key="react">
        <h3>Usage with React </h3>
        {globalDescription}
        <SyntaxHighlighter language="javascript" style={theme}>
          {makeComponentPath(pack, icon)}
        </SyntaxHighlighter>
        <p>
          And the you can easily use it in your components:
          <SyntaxHighlighter language="javascript" style={theme}>
            {makeComponentPath(pack, icon)}
            {makeComponentText(icon)}
          </SyntaxHighlighter>
          This code will automatically tree-shaked by webpack and you can use
          one icon from each library without fair of increasing bundle size.
        </p>
        <div>
          Also you can customize your webpack config using a plugin like
          <span className="code">transform-import</span> to change import paths
          to the direct component path, like this:
          <SyntaxHighlighter language="javascript" style={theme}>
            {`[
  'transform-imports',
  {
    '@iconbox\/?(((\\w*)?\/?)*)': {
    'transform': isClient ? '@iconbox/\${1}/esm/\${member}' : '@iconbox/\${1}/\${member}',
  },
}]`}
          </SyntaxHighlighter>
          the <span className="code">isClient</span> could decide between SSR
          and CSR and load svg files cjs version in server.
          {footer}
        </div>
      </TabPanel>

      <TabPanel key="react-sprite">
        <h3>Sprite</h3>
        <p>
          The usage and interface is like using icons for{" "}
          <span className="code">react components</span> and
        </p>
        {globalDescription}
        <p>
          <SyntaxHighlighter language="javascript" style={theme}>
            {makeSpritePath(pack, icon)}
            {makeComponentText(icon)}
          </SyntaxHighlighter>
          Just like react svg components, this code will automatically
          tree-shaked by webpack and you can use one icon from each library
          without fair of increasing bundle size, but also you can combine all
          of them into a single sprite svg file or string them use it in your
          application, there are a lot of articles out there about SVG sprites.
          In react application you can use{" "}
          <a
            href="https://github.com/JetBrains/svg-sprite-loader"
            target="_blank"
            rel="noreferrer"
          >
            Jetbrains svg sprite loader webpack plugin
          </a>{" "}
          to achieve this.
        </p>
        <div>
          Also you can customize your webpack config using a plugin like
          <span className="code">transform-import</span> to change import paths
          to the direct component path, like this:
          <SyntaxHighlighter language="javascript" style={theme}>
            {`[
  'transform-imports',
  {
    '@iconbox\\/?(((\\\\w*)?\\/?)*)\\/sprite': {
      'transform': isClient ? '@iconbox/\${1}/esm/\${member}/sprite' : '@iconbox/\${1}/\${member}/sprite',
    },
  }
]`}
          </SyntaxHighlighter>
          the <span className="code">isClient</span> could decide between SSR
          and CSR and load svg files cjs version in server.
          {footer}
        </div>
      </TabPanel>

      <TabPanel key="svg">
        <h3>SVG</h3>
        {globalDescription}
        <SyntaxHighlighter language="javascript" style={theme}>
          {makeSvgPath(pack, icon)}
          {makeComponentText(icon)}
        </SyntaxHighlighter>
        {footer}
      </TabPanel>
      <TabPanel key="react-native">
        <h3>Not ready yet: react-native</h3>
      </TabPanel>

      <TabPanel key="vue">
        <h3>Not ready yet: vue</h3>
      </TabPanel>

      <TabPanel key="svelte">
        <h3>Not ready yet: svelte</h3>
      </TabPanel>
      <TabPanel key="angular">
        <h3>Not ready yet: angular</h3>
      </TabPanel>
    </StyledTabsWrapper>
  );
}

export default Usage;
