/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import Setting from "./Setting";

export default {
  component: Setting,
  title: "Molecule/Setting",
} as Meta;

const Template: ComponentStory<typeof Setting> = (args) => {
  return <Setting {...args} />;
};

export const Default: ComponentStory<typeof Setting> = Template.bind({});
Default.args = {};

