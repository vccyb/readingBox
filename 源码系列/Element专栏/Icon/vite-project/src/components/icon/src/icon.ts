import { ExtractPropTypes, PropType } from "vue";

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>, // size 可以说数字，也可以说字符串
} as const;

export type iconProps = ExtractPropTypes<typeof iconProps>;
