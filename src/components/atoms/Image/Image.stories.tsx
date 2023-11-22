/* eslint-disable no-console */
import { ComponentStory, Meta } from "@storybook/react";
import Image from "./Image";

export default {
  component: Image,
  title: "Atoms/Button",
} as Meta;

const Template: ComponentStory<typeof Image> = (args) => {
  return (
    <div className="h-14 w-52">
      <Image {...args} />
    </div>
  );
};

export const Default: ComponentStory<typeof Image> = Template.bind({});
Default.args = {};
export const SizeLarge: ComponentStory<typeof Image> = Template.bind({});
SizeLarge.args = {};
