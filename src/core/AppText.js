import React, { memo } from 'react'
import { Text, StyleSheet } from 'react-native'
import { fonts } from '@/assets/fonts'
import { colors, getFontSize } from '@/theme'

const AppText = ({
  children,
  variant = 'body',
  color = colors.black,
  style,
  ...props
}) => {
  return (
    <Text style={[styles[variant], { color }, style]} {...props}>
      {children}
    </Text>
  )
}

export default memo(AppText)

const styles = StyleSheet.create({
  title: {
    fontSize: getFontSize(34),
    fontFamily: fonts.regular
  },
  subTitle: {
    fontSize: getFontSize(22),
    fontFamily: fonts.regular
  },
  regularFont: {
    fontSize: getFontSize(16),
    fontFamily: fonts.regular
  },
  body: {
    fontSize: getFontSize(14),
    fontFamily: fonts.regular,
  },
  ligntBody: {
    fontSize: getFontSize(14),
    fontFamily: fonts.light,
  },
  bodyMedium: {
    fontSize: getFontSize(14),
    fontFamily: fonts.medium,
  },
  bodybold: {
    fontSize: getFontSize(14),
    fontFamily: fonts.bold,
  },
  bodySemiBold: {
    fontSize: getFontSize(14),
    fontFamily: fonts.semiBold,
  },
  caption: {
    fontSize: getFontSize(12),
    fontFamily: fonts.regular,
  },
  captionLight: {
    fontSize: getFontSize(12),
    fontFamily: fonts.light,
  },
  boldCaption: {
    fontSize: getFontSize(14),
    fontFamily: fonts.semiBold,
  },
  smallCaption: {
    fontSize: getFontSize(10),
    fontFamily: fonts.regular,
  },
  smallCaptionLight: {
    fontSize: getFontSize(10),
    fontFamily: fonts.light,
  },

})

export const Variant = {
  title: "title",
  subTitle: 'subTitle',
  regularFont: "regularFont",
  body: "body",
  bodyMedium: 'bodyMedium',
  bodybold: 'bodybold',
  bodySemiBold: 'bodySemiBold',
  caption: "caption",
  boldCaption: 'boldCaption',
  captionLight: 'captionLight',
  ligntBody: 'ligntBody',
  smallCaption: 'smallCaption',
  smallCaptionLight: 'smallCaptionLight',
}