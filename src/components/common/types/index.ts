export type AddItemFormType = {
  addItem: (title: string, note: string) => void;
  style?: any;
};

export type EditableSpanType = {
  value: string;
  onChange?: (newValue: string) => void;
};
