/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import InventoryChampion from "./InventoryChampion";

export default {
  component: InventoryChampion,
  title: "Organism/InventoryChampion",
} as Meta;

const Template: ComponentStory<typeof InventoryChampion> = (args) => {
  return <InventoryChampion {...args} />;
};

export const Default: ComponentStory<typeof InventoryChampion> = Template.bind({});
Default.args = {};

