import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

import { sbHandleEvent } from '@/helpers/sbHandleEvent';
import {
  type IComponentPropsWithLegend,
  ComponentShowcase,
} from '@/components/molecules/ComponentShowcase';
import { Fab, type IFabProps } from './Fab';

// https://m3.material.io/components/floating-action-button/overview
// https://material-web.dev/components/fab/
// https://github.com/material-components/material-web/blob/main/fab/demo/stories.ts

const meta = {
  component: Fab,
} satisfies Meta<typeof Fab>;

type IStory = StoryObj<typeof meta>;

const defaultArgs = {
  onClick: (args) => sbHandleEvent('click', args),
} satisfies Partial<IFabProps>;

const statesProps: IComponentPropsWithLegend<IFabProps> = [
  { $legend: 'Enabled', label: 'Enabled' },
  { $legend: 'Hovered', label: 'Hovered', visualState: { hovered: true } },
  { $legend: 'Focused', label: 'Focused', visualState: { focused: true } },
  { $legend: 'Pressed', label: 'Pressed', visualState: { pressed: true } },
  { $legend: 'Loading', label: 'Loading', loading: true },
  {
    $legend: 'Loading text',
    label: 'Loading',
    loading: true,
    loadingText: '…',
  },
  { $legend: 'Disabled', label: 'Disabled', disabled: true },
];

const svgColorIcon = (
  <svg viewBox='0 0 36 36'>
    <path fill='#4285F4' d='M30 16H20l-4 4h14z'></path>
    <path fill='#FBBC05' d='M6 16v4h10l4-4z'></path>
    <path fill='#34A853' d='M16 16v14h4V20z'></path>
    <path fill='#EA4335' d='M20 16V6h-4v14z'></path>
    <path fill='none' d='M0 0h36v36H0z'></path>
  </svg>
);

export const Variants: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Fab}
      props={props}
      colsProps={[
        {
          $legend: 'Surface',
          variant: 'surface',
          icon: PaperAirplaneIcon,
        },
        {
          $legend: 'Primary',
          variant: 'primary',
          icon: PaperAirplaneIcon,
        },
        {
          $legend: 'Secondary',
          variant: 'secondary',
          icon: PaperAirplaneIcon,
        },
        {
          $legend: 'Tertiary',
          variant: 'tertiary',
          icon: PaperAirplaneIcon,
        },
        {
          $legend: 'Branded',
          variant: 'branded',
          children: svgColorIcon,
        },
      ]}
    />
  ),
  args: defaultArgs,
};

export const Sizes: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Fab}
      props={props}
      colsProps={[
        {
          $legend: 'Small',
          size: 'sm',
        },
        {
          $legend: 'Medium',
          size: 'md',
        },
        {
          $legend: 'Large',
          size: 'lg',
        },
      ]}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'surface',
    icon: PaperAirplaneIcon,
  },
};

export const BrandedSizes: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Fab}
      props={props}
      colsProps={[
        { $legend: 'Medium', size: 'md' },
        { $legend: 'Large', size: 'lg' },
      ]}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'branded',
    children: svgColorIcon,
  },
};

export const Surface: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Fab}
      props={props}
      colsProps={statesProps}
      rowsProps={[
        { $legend: 'Basic', label: undefined, icon: PaperAirplaneIcon },
        { $legend: 'With label', icon: PaperAirplaneIcon },
        { $legend: 'Label only' },
      ]}
      groupsProps={[{}, { $legend: 'Lowered', lowered: true }]}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'surface',
  },
};

export const Primary: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Fab}
      props={props}
      colsProps={statesProps}
      rowsProps={[
        { $legend: 'Basic', label: undefined, icon: PaperAirplaneIcon },
        { $legend: 'With label', icon: PaperAirplaneIcon },
        { $legend: 'Label only' },
      ]}
      groupsProps={[{}, { $legend: 'Lowered', lowered: true }]}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'primary',
  },
};

export const Secondary: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Fab}
      props={props}
      colsProps={statesProps}
      rowsProps={[
        { $legend: 'Basic', label: undefined, icon: PaperAirplaneIcon },
        { $legend: 'With label', icon: PaperAirplaneIcon },
        { $legend: 'Label only' },
      ]}
      groupsProps={[{}, { $legend: 'Lowered', lowered: true }]}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'secondary',
  },
};

export const Tertiary: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Fab}
      props={props}
      colsProps={statesProps}
      rowsProps={[
        { $legend: 'Basic', label: undefined, icon: PaperAirplaneIcon },
        { $legend: 'With label', icon: PaperAirplaneIcon },
        { $legend: 'Label only' },
      ]}
      groupsProps={[{}, { $legend: 'Lowered', lowered: true }]}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'tertiary',
  },
};

export const Branded: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Fab}
      props={props}
      colsProps={statesProps}
      rowsProps={[
        { $legend: 'Basic', label: undefined },
        { $legend: 'With label' },
      ]}
      groupsProps={[{}, { $legend: 'Lowered', lowered: true }]}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'branded',
    children: svgColorIcon,
  },
};

export default meta;