/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import StatsTab from "./StatsTab";

export default {
  component: StatsTab,
  title: "Molecule/StatsTab",
} as Meta;

const Template: ComponentStory<typeof StatsTab> = (args) => {
  return <StatsTab {...args} />;
};

export const Default: ComponentStory<typeof StatsTab> = Template.bind({});
Default.args = {};

