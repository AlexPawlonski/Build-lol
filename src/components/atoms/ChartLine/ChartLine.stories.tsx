/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ChartLine from "./ChartLine";

export default {
  component: ChartLine,
  title: "Atoms/ChartLine",
} as Meta;

const Template: ComponentStory<typeof ChartLine> = (args) => {
  return <ChartLine {...args} />;
};

export const Default: ComponentStory<typeof ChartLine> = Template.bind({});
Default.args = {};
