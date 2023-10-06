/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import Level from "./Level";

export default {
  component: Level,
  title: "Atoms/Level",
} as Meta;

const Template: ComponentStory<typeof Level> = (args) => {
  return <Level {...args} />;
};

export const Default: ComponentStory<typeof Level> = Template.bind({});
Default.args = {};

