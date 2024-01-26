import React from 'react';

import type { IAny } from '@/helpers/types';
import { useForkRef } from '@/hooks/useForkRef';
import { useId } from '@/hooks/useId';
import { useControlled } from '@/hooks/useControlled';
import {
  type IRadioGroupContextValue,
  RadioGroupContext,
} from './RadioGroupContext';

export interface IRadioGroupProps extends IRadioGroupContextValue {
  actions?: React.RefObject<unknown>;
  children?: React.ReactNode;
  defaultValue?: string;
}

// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/RadioGroup/RadioGroup.js
// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/RadioGroup/RadioGroup.d.ts
export const RadioGroup = React.forwardRef(function RadioGroup(
  { actions, children, onChange, ...props }: IRadioGroupProps,
  ref: React.ForwardedRef<IAny> | null,
): React.ReactNode {
  const hostElRef = React.useRef<HTMLElement>(null);
  const [value, setValue] = useControlled({
    controlled: props.value,
    default: props.defaultValue,
    name: 'RadioGroup',
  });

  React.useImperativeHandle(
    actions,
    () => ({
      focus: () => {
        let input = hostElRef.current?.querySelector(
          'input:not(:disabled):checked',
        );

        if (!input) {
          input = hostElRef.current?.querySelector('input:not(:disabled)');
        }

        if (input) {
          (input as HTMLInputElement).focus();
        }
      },
    }),
    [],
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleElRef = useForkRef(ref, hostElRef);
  const name = useId();

  const contextValue: IRadioGroupContextValue = React.useMemo(
    () => ({
      name,
      onChange(value: string | undefined) {
        setValue(value);
        onChange?.(value);
      },
      value,
    }),
    [name, onChange, value, setValue],
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      {/* TODO: <FormGroup ref={handleElRef} role='radiogroup'> */}
      {children}
      {/* TODO: </FormGroup> */}
    </RadioGroupContext.Provider>
  );
});