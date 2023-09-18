/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import ChampionLoadingImg from "./ChampionLoadingImg";

export default {
  component: ChampionLoadingImg,
  title: "Molecule/ChampionLoadingImg",
} as Meta;

const Template: ComponentStory<typeof ChampionLoadingImg> = (args) => {
  return <ChampionLoadingImg {...args} />;
};

export const Default: ComponentStory<typeof ChampionLoadingImg> = Template.bind({});
Default.args = {};

