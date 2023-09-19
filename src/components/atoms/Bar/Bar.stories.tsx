/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import Bar from "./Bar";

export default {
  component: Bar,
  title: "Atoms/Bar",
} as Meta;

const Template: ComponentStory<typeof Bar> = (args) => {
  return <Bar {...args} />;
};

export const Default: ComponentStory<typeof Bar> = Template.bind({});
Default.args = {};

