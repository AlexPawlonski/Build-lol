/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import DataView from "./DataView";

export default {
  component: DataView,
  title: "Organism/ChampSelect",
} as Meta;

const Template: ComponentStory<typeof DataView> = (args) => {
  return (
    <div className="">
      <DataView {...args} />
    </div>
  );
};

export const Default: ComponentStory<typeof DataView> = Template.bind({});
Default.args = {};

