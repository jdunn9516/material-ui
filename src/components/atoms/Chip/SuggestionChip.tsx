import React from 'react';
import { type IChipProps, Chip } from './Chip';

export interface ISuggestionChipProps
  extends Omit<IChipProps, 'variant' | 'icon' | 'imageUrl' | 'onDelete'> {}

export const SuggestionChip: React.FC<ISuggestionChipProps> = (props) => (
  <Chip {...props} variant='suggestion' />
);