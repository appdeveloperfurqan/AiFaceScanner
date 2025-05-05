import { TouchableOpacity, StyleSheet, ActivityIndicator, View } from 'react-native'
import React, { memo } from 'react'
import { colors, getFontSize, hp } from '@/theme'
import { fonts } from '@/assets/fonts'
import AppText from './AppText'

const AppButton = ({ text, textStyle, style, onPress, isLoading, disabled, bgColor, startIcon, secondary = false, endIcon }) => {
    return (
        <>
            {!secondary ? (
                < TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: bgColor ?? colors.black }, style]} disabled={disabled ?? isLoading} >
                    {
                        isLoading ? (
                            <ActivityIndicator
                                size={'small'}
                                color={colors.white} />
                        ) : (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                {startIcon && startIcon}
                                <AppText style={[styles.buttonLabel, { color: colors.white }, textStyle]}>{text}</AppText>
                                {endIcon && endIcon}
                            </View >
                        )}
                </TouchableOpacity >
            ) : (
                < TouchableOpacity onPress={onPress} style={[styles.container, style, { backgroundColor: bgColor ?? colors.white, borderWidth: 1, borderColor: colors.borderGray }]} disabled={isLoading ? true : disabled} >
                    {
                        isLoading ? (
                            <ActivityIndicator
                                size={'small'}
                                color={colors.black} />
                        ) : (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                {startIcon && startIcon}
                                <AppText style={[styles.buttonLabel, { color: colors.black }, textStyle]}>{text}</AppText>
                                {endIcon && endIcon}
                            </View >
                        )}
                </TouchableOpacity >
            )
            }
        </>
    )
}
export default memo(AppButton)
const styles = StyleSheet.create({
    container: {
        height: hp(5.8),
        borderRadius: hp(3),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp(1),
    },
    buttonLabel: {
        fontFamily: fonts.semiBold,
        fontSize: getFontSize(15)
    }
})