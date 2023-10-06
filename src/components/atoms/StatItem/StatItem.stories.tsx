/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import StatItem from "./StatItem";

export default {
  component: StatItem,
  title: "Atoms/StatItem",
} as Meta;

const Template: ComponentStory<typeof StatItem> = (args) => {
  return <StatItem {...args} />;
};

export const Default: ComponentStory<typeof StatItem> = Template.bind({});
Default.args = {};

