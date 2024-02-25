import type { Meta, StoryObj } from '@storybook/react';
import {Button} from "../index.ts";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'uiKit/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        title: {title: "Button"}

    },
} satisfies Meta<typeof Button>;


export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
    args: {
        title: "Button",
        onClick: () => {},
        textColor: "main",
    },
};

export const Navigation: Story = {
    args: {
       title: "Button",
       onClick: () => {},
       textColor: "navigation",
    },
};

export const ClickMe: Story = {
    args: {
        title: "Click Me",
        onClick: () => {alert("u clicked")},
        textColor: "main",
    },
};

