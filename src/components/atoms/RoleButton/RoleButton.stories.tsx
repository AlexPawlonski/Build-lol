/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import RoleButton from "./RoleButton";

export default {
  component: RoleButton,
  title: "Atoms/RoleButton",
} as Meta;

const Template: ComponentStory<typeof RoleButton> = (args) => {
  return <RoleButton {...args} />;
};

export const Default: ComponentStory<typeof RoleButton> = Template.bind({});
Default.args = {};

