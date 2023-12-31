/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
  title: "Atoms/Button",
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <div className="h-14 w-52">
      <Button {...args} />
    </div>
  );
};

export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.args = { text: "CHAMPION", onClick: () => console.log("click!") };
export const SizeLarge: ComponentStory<typeof Button> = Template.bind({});
SizeLarge.args = { text: "CHAMPION", onClick: () => console.log("click!") };
