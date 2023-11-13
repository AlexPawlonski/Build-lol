/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ChartCircle from "./ChartCircle";

export default {
  component: ChartCircle,
  title: "Atoms/ChartCircle",
} as Meta;

const Template: ComponentStory<typeof ChartCircle> = (args) => {
  return <ChartCircle {...args} />;
};

export const Default: ComponentStory<typeof ChartCircle> = Template.bind({});
Default.args = {};
