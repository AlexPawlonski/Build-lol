/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import Select from "./Select";

export default {
  component: Select,
  title: "Atoms/Select",
} as Meta;

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

export const Default: ComponentStory<typeof Select> = Template.bind({});
Default.args = {};

