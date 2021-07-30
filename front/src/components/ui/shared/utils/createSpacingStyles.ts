import { css } from '@emotion/react'

export interface SpacingStyles {
  margin?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  m?: SpacingStyles['margin']
  mb?: SpacingStyles['marginBottom']
  mt?: SpacingStyles['marginTop']
  ml?: SpacingStyles['marginLeft']
  mr?: SpacingStyles['marginRight']
  padding?: string
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
  p?: SpacingStyles['padding']
  pt?: SpacingStyles['paddingTop']
  pb?: SpacingStyles['paddingBottom']
  pl?: SpacingStyles['paddingLeft']
  pr?: SpacingStyles['paddingRight']
}

export const createSpacingStyles = (spacingStyles: SpacingStyles) => css`
  margin: ${spacingStyles.margin || spacingStyles.m};
  margin-top: ${spacingStyles.marginTop || spacingStyles.mt};
  margin-bottom: ${spacingStyles.marginBottom || spacingStyles.mb};
  margin-left: ${spacingStyles.marginLeft || spacingStyles.ml};
  margin-right: ${spacingStyles.marginRight || spacingStyles.mr};
  padding: ${spacingStyles.padding || spacingStyles.p};
  padding-top: ${spacingStyles.paddingTop || spacingStyles.pt};
  padding-bottom: ${spacingStyles.paddingBottom || spacingStyles.pb};
  padding-left: ${spacingStyles.paddingLeft || spacingStyles.pl};
  padding-right: ${spacingStyles.paddingRight || spacingStyles.pr};
`
