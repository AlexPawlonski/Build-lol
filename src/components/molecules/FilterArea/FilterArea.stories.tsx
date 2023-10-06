/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import FilterArea from "./FilterArea";

export default {
  component: FilterArea,
  title: "Molecule/FilterArea",
} as Meta;

const Template: ComponentStory<typeof FilterArea> = (args) => {
  return <FilterArea {...args} />;
};

export const Default: ComponentStory<typeof FilterArea> = Template.bind({});
Default.args = {};

