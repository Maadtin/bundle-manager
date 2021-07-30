import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string
      primary: string
      secondary: string
      text: string
    }
    fontSizes: {
      default: string
    }
  }
}
