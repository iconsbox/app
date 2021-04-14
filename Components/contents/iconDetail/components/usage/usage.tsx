import React from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { StyledTabsWrapper } from "./styles";
import {
  makeComponentPath,
  makeSpritePath,
  makeSvgPath,
} from "../../../../../Helpers";

type Props = {
  pack: string;
  icon: string;
};

function Usage({ pack, icon }: Props) {
  const globalDescription = (
    <div className="install-message">
      At first you need to install{" "}
      <span className="code package-name2">package/name</span> then use one of
      this import ways :
    </div>
  );

  return (
    <StyledTabsWrapper>
      <h2>How to use iconbox</h2>
      <TabList>
        <Tab key="react">React</Tab>
        <Tab key="react-sprite">React Sprite</Tab>
        <Tab key="svg">SVG file</Tab>
        <Tab key="react-native" disabled>
          ReactNative
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
        <input
          type="text"
          className="code componentImport"
          value={makeComponentPath(pack, icon)}
          readOnly
        />
      </TabPanel>

      <TabPanel key="react-sprite">
        <h3>Sprite</h3>
        {globalDescription}

        <input
          type="text"
          className="code spriteImport"
          value={makeSpritePath(pack, icon)}
          readOnly
        />
      </TabPanel>

      <TabPanel key="svg">
        <h3>SVG</h3>
        {globalDescription}

        <input
          type="text"
          className="code svgImport"
          value={makeSvgPath(pack, icon)}
          readOnly
        />
      </TabPanel>
      <TabPanel key="react-native">
        <h3>Not ready yet: react-native</h3>
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
