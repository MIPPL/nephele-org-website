import * as React from "react"
import { RadioGroup, Radio as RadioComponent, Stack } from "@chakra-ui/react"
import { Meta, StoryObj } from "@storybook/react"

type RadioType = typeof RadioComponent

const meta: Meta<RadioType> = {
  title: "Atoms / Form / Radio",
  component: RadioComponent,
  argTypes: {
    groupDir: {
      options: ["column", "row"],
      control: { type: "radio" },
    },
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      expanded: false,
    },
  },
}

export default meta

type Story = StoryObj<RadioType>

export const Radio: Story = {
  args: {
    groupDir: "column",
  },
  render: ({ groupDir }) => (
    <RadioGroup defaultValue={"checked"}>
      <Stack direction={groupDir} spacing={4} align="flex-start">
        <RadioComponent value="checked">defaultValue</RadioComponent>
        <RadioComponent value="disabled" isDisabled>
          isDisabled
        </RadioComponent>
        <RadioComponent value="focusable" isFocusable isDisabled>
          isFocusable
        </RadioComponent>
        <RadioComponent value="read-only" isReadOnly>
          isReadOnly
        </RadioComponent>
        <RadioComponent value="required" isRequired>
          isRequired
        </RadioComponent>
      </Stack>
    </RadioGroup>
  ),
}
