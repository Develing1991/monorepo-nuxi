// props type... issue nuxt macro를 사용할지.. 최선의 방법 고민 좀...
// https://github.com/vuejs/core/issues/4294#issuecomment-1364769027
export interface Props {
  label: string
  color: string
  size: string
  toggle: boolean
}

export interface Props2 {
  label: string
  bgColor: string
  reverse: boolean
}

export interface ButtonConfig {
  [key: string]: string | ConfigOptions
}

export interface ConfigOptions {
  bgColor: string
  textColor: string
  outline: string
}

// export interface Emits {
//   (e: 'click', id: number): void
// }

// export type IData = string
