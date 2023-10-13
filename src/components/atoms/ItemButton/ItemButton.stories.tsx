/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ItemButton from "./ItemButton";
import iconChamp from "./Aurelion_SolIcon.webp";

export default {
  component: ItemButton,
  title: "Atoms/ItemButton",
} as Meta;

const Template: ComponentStory<typeof ItemButton> = (args) => {
  return <ItemButton {...args} />;
};

export const Default: ComponentStory<typeof ItemButton> = Template.bind({});
Default.args = { img: iconChamp, size: "w-52 h-52", id: "test", onClick: (id) => console.log(id) };

