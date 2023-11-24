/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ItemButton from "./ItemButton";

export default {
  component: ItemButton,
  title: "Atoms/ItemButton",
} as Meta;

const Template: ComponentStory<typeof ItemButton> = (args) => {
  return <ItemButton {...args} />;
};

export const Default: ComponentStory<typeof ItemButton> = Template.bind({});
Default.args = {};
