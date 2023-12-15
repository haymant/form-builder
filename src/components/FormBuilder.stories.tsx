import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { FormBuilder } from "./FormBuilder";

const meta: Meta<typeof FormBuilder> = {
  component: FormBuilder,
  title: "FormBuilder",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FormBuilder>;

export const Primary: Story = (args) => (
  <FormBuilder />
);

Primary.args = {
};