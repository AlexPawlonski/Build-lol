/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ChampionButton from "./ChampionButton";
import iconChamp from "./Aurelion_SolIcon.webp";

export default {
  component: ChampionButton,
  title: "Atoms/ChampionButton",
} as Meta;

const Template: ComponentStory<typeof ChampionButton> = (args) => {
  return <ChampionButton {...args} />;
};

export const Default: ComponentStory<typeof ChampionButton> = Template.bind({});
Default.args = {};
