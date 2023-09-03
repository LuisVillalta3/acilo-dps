import { KeyboardTypeOptions } from "react-native";

export type CustomTextInputProps = {
  label: string;
	mode: "outlined" | "flat";
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: KeyboardTypeOptions
}