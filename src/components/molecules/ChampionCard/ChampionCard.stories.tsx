/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ChampionCard from "./ChampionCard";

export default {
  component: ChampionCard,
  title: "Molecule/ChampionCard",
} as Meta;

const Template: ComponentStory<typeof ChampionCard> = (args) => {
  return <ChampionCard {...args} />;
};

export const Default: ComponentStory<typeof ChampionCard> = Template.bind({});
Default.args = {};

