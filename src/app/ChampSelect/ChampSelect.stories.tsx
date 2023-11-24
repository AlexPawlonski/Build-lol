/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ChampSelect from "./ChampSelect";

export default {
  component: ChampSelect,
  title: "Organism/ChampSelect",
} as Meta;

const Template: ComponentStory<typeof ChampSelect> = (args) => {
  return (
    <div className="h-14 w-52">
      <ChampSelect {...args} />
    </div>
  );
};

export const Default: ComponentStory<typeof ChampSelect> = Template.bind({});
Default.args = {};

