/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ImputSearch from "./ImputSearch";

export default {
  component: ImputSearch,
  title: "Atoms/ImputSearch",
} as Meta;

const Template: ComponentStory<typeof ImputSearch> = (args) => {
  return <ImputSearch {...args} />;
};

export const Default: ComponentStory<typeof ImputSearch> = Template.bind({});
Default.args = {};

