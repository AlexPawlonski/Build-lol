/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import Inventory from "./Inventory";

export default {
  component: Inventory,
  title: "Organism/Inventory",
} as Meta;

const Template: ComponentStory<typeof Inventory> = (args) => {
  return <Inventory {...args} />;
};

export const Default: ComponentStory<typeof Inventory> = Template.bind({});
Default.args = {};

