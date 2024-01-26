import type { MapNamespaces } from '@stylexjs/stylex/lib/StyleXTypes';
import * as stylex from '@stylexjs/stylex';

import type { IStyles } from '@/helpers/types';
import type { IComponentShowcaseStyleKey } from '@/components/molecules/ComponentShowcase';
import { componentVars as vars } from './ComponentShowcase.stylex';

type IComponentShowcaseStyles = IStyles<IComponentShowcaseStyleKey>;
export const styles: MapNamespaces<IComponentShowcaseStyles> =
  stylex.create<IComponentShowcaseStyles>({
    host: {
      color: vars.textColor,
    },
    flex: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '100%',
    },
    justifyStart: {
      justifyContent: 'flex-start',
    },
    justifyEnd: {
      justifyContent: 'flex-end',
    },
    itemsStart: {
      alignItems: 'start',
    },
    itemsEnd: {
      alignItems: 'end',
    },
    textRight: {
      textAlign: 'right',
    },
    groupRows: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3.5rem',
    },
    cols: {
      display: 'flex',
      gap: '2rem',
    },
    rows: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
    },
    rows$aligned: {
      alignItems: 'center',
    },
    legend: {
      fontFamily: vars.legendTextFont,
      fontSize: vars.legendTextSize,
      fontWeight: vars.legendTextWeight,
      lineHeight: vars.legendTextLineHeight,
      letterSpacing: vars.legendTextTracking,
      color: vars.legendTextColor,
      opacity: '0.5',
    },
    legendRow: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '120px',
    },
    leftBorder: {
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid',
      borderLeftColor: vars.groupBorderColor,
      paddingLeft: '2rem',
    },
    invisible: {
      visibility: 'hidden',
    },
  });