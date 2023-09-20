/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import Passive from "./Passive";

export default {
  component: Passive,
  title: "Atoms/Passive",
} as Meta;

const Template: ComponentStory<typeof Passive> = (args) => {
  return <Passive {...args} />;
};

export const Default: ComponentStory<typeof Passive> = Template.bind({});
Default.args = {};

