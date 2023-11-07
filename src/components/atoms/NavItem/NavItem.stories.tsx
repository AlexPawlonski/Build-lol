/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import NavItem from "./NavItem";

export default {
  component: NavItem,
  title: "Atoms/NavItem",
} as Meta;

const Template: ComponentStory<typeof NavItem> = (args) => {
  return (
    <div className="h-14 w-52">
      <NavItem {...args} />
    </div>
  );
};

export const Default: ComponentStory<typeof NavItem> = Template.bind({});
Default.args = {};

