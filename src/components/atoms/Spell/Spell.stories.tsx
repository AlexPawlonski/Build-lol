/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import Spell from "./Spell";

export default {
  component: Spell,
  title: "Atoms/Spell",
} as Meta;

const Template: ComponentStory<typeof Spell> = (args) => {
  return <Spell {...args} />;
};

export const Default: ComponentStory<typeof Spell> = Template.bind({});
Default.args = {};

