/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ChampionHud from "./ChampionHud";

export default {
  component: ChampionHud,
  title: "Molecule/ChampionHud",
} as Meta;

const Template: ComponentStory<typeof ChampionHud> = (args) => {
  return <ChampionHud {...args} />;
};

export const Default: ComponentStory<typeof ChampionHud> = Template.bind({});
Default.args = {};

