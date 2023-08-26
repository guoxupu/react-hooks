declare namespace Component {
  export type FormMode = "create" | "read" | "edit" | "review" | "copy";

  export interface BaseFormProps<T = unknown> {
    mode: FormMode;
    data?: T;
    children?: JSX.Element;
    onSuccess?: () => void | Promise<void>;
  }
}
