export type TToggleChangeEvent = { newValue: boolean; id: string };

export interface IToggle {
  labelText?: string;
  defaultOn?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: ({ newValue, id }: TToggleChangeEvent) => void;
}
