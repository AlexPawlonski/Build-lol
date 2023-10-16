/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ItemsCategorie from "./ItemsCategorie";

export default {
  component: ItemsCategorie,
  title: "Molecule/ItemsCategorie",
} as Meta;

const Template: ComponentStory<typeof ItemsCategorie> = (args) => {
  return <ItemsCategorie {...args} />;
};

export const Default: ComponentStory<typeof ItemsCategorie> = Template.bind({});
Default.args = {};

