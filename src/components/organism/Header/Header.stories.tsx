/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import Header from "./Header";

export default {
  component: Header,
  title: "Organism/Header",
} as Meta;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Default: ComponentStory<typeof Header> = Template.bind({});
Default.args = {};

