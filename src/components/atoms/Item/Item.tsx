import * as React from 'react';

import type { IContainerProps } from '@/components/utils/Container';
import type { IItemStyleKey, IItemStyleVarKey } from './Item.styledefs';
import { stylesCombinatorFactory } from '@/helpers/stylesCombinatorFactory';
import { stylePropsFactory } from '@/helpers/stylePropsFactory';
import { useComponentTheme } from '@/hooks/useComponentTheme';

// https://github.com/material-components/material-web/blob/main/labs/item/item.ts

export type IItemProps = IContainerProps<IItemStyleKey, IItemStyleVarKey> & {
  container?: React.ReactNode;
  start?: React.ReactNode;
  overline?: React.ReactNode;
  children?: React.ReactNode;
  headline?: React.ReactNode;
  supportingText?: React.ReactNode;
  trailingSupportingText?: React.ReactNode;
  end?: React.ReactNode;
};

export const Item: React.FC<IItemProps> = ({
  container,
  start,
  overline,
  children,
  headline,
  supportingText,
  trailingSupportingText,
  end,
  ...props
}) => {
  const theme = useComponentTheme('Item');

  const styleProps = React.useMemo(
    () =>
      stylePropsFactory<IItemStyleKey, IItemStyleVarKey>(
        stylesCombinatorFactory(theme.styles, props.styles),
        props.visualState,
      ),
    [theme.styles, props.styles, props.visualState],
  );

  return (
    <div {...styleProps(['host', props.sx], [theme.vars, props.theme])}>
      {container ? <div {...styleProps(['container'])}>{container}</div> : null}

      {start ? (
        <div {...styleProps(['nonText'])}>
          <div {...styleProps(['center', 'start'])}>{start}</div>
        </div>
      ) : null}

      <div {...styleProps(['text'])}>
        {overline ? <div {...styleProps(['overline'])}>{overline}</div> : null}
        <div {...styleProps(['children'])}>{children}</div>
        {headline ? <div {...styleProps(['headline'])}>{headline}</div> : null}
        {supportingText ? (
          <div {...styleProps(['supportingText'])}>{supportingText}</div>
        ) : null}
      </div>

      {trailingSupportingText ? (
        <div {...styleProps(['text'])}>
          <div {...styleProps(['center', 'trailingSupportingText'])}>
            {trailingSupportingText}
          </div>
        </div>
      ) : null}

      {end ? (
        <div {...styleProps(['nonText'])}>
          <div {...styleProps(['center', 'end'])}>{end}</div>
        </div>
      ) : null}
    </div>
  );
};
