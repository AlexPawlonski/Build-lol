/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import Nav from "./Nav";

export default {
  component: Nav,
  title: "Organism/Nav",
} as Meta;

const Template: ComponentStory<typeof Nav> = (args) => {
  return <Nav {...args} />;
};

export const Default: ComponentStory<typeof Nav> = Template.bind({});
Default.args = {};

