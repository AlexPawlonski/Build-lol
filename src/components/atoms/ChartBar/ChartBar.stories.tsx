/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ChartBar from "./ChartBar";

export default {
  component: ChartBar,
  title: "Atoms/ChartBar",
} as Meta;

const Template: ComponentStory<typeof ChartBar> = (args) => {
  return <ChartBar {...args} />;
};

export const Default: ComponentStory<typeof ChartBar> = Template.bind({});
Default.args = {};
