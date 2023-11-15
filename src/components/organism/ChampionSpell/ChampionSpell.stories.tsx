/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ChampionSpell from "./ChampionSpell";

export default {
  component: ChampionSpell,
  title: "Molecule/ChampionSpell",
} as Meta;

const Template: ComponentStory<typeof ChampionSpell> = (args) => {
  return <ChampionSpell {...args} />;
};

export const Default: ComponentStory<typeof ChampionSpell> = Template.bind({});
Default.args = {};

