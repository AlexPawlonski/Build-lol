/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ItemDetail from "./ItemDetail";

export default {
  component: ItemDetail,
  title: "Molecule/ItemDetail",
} as Meta;

const Template: ComponentStory<typeof ItemDetail> = (args) => {
  return <ItemDetail {...args} />;
};

export const Default: ComponentStory<typeof ItemDetail> = Template.bind({});
Default.args = {};

