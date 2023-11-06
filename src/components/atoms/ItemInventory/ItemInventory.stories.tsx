/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ItemInventory from "./ItemInventory";

export default {
  component: ItemInventory,
  title: "Atoms/ItemInventory",
} as Meta;

const Template: ComponentStory<typeof ItemInventory> = (args) => {
  return <ItemInventory {...args} />;
};

export const Default: ComponentStory<typeof ItemInventory> = Template.bind({});
Default.args = {};
