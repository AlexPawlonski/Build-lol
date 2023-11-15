/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ChampionStats from "./ChampionStats";

export default {
  component: ChampionStats,
  title: "Molecule/ChampionStats",
} as Meta;

const Template: ComponentStory<typeof ChampionStats> = (args) => {
  return <ChampionStats {...args} />;
};

export const Default: ComponentStory<typeof ChampionStats> = Template.bind({});
Default.args = {};

