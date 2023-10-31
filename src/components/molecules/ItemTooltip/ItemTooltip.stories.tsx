/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ItemTooltip from "./ItemTooltip";

export default {
  component: ItemTooltip,
  title: "Molecule/ItemTooltip",
} as Meta;

const Template: ComponentStory<typeof ItemTooltip> = (args) => {
  return <ItemTooltip {...args} />;
};

export const Default: ComponentStory<typeof ItemTooltip> = Template.bind({});
Default.args = {};

