import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  type IComponentPropsWithLegend,
  ComponentShowcase,
} from '@/components/molecules/ComponentShowcase';
import { Template, type ITemplateProps } from './Template';

const meta = {
  component: Template,
} satisfies Meta<typeof Template>;

type IStory = StoryObj<typeof meta>;

const defaultArgs = {} satisfies Partial<ITemplateProps>;

const statesProps: IComponentPropsWithLegend<ITemplateProps> = [
  { $legend: 'Enabled' },
  { $legend: 'Focused', visualState: { focused: true } },
  { $legend: 'Hovered', visualState: { hovered: true } },
  { $legend: 'Pressed', visualState: { pressed: true } },
];

export const Variants: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Template}
      props={props}
      colsProps={[{ variant: 'variant' }]}
    />
  ),
  args: defaultArgs,
};

export const Variant: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Template}
      props={props}
      colsProps={statesProps}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'variant',
  },
};

export default meta;