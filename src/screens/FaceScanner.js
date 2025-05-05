import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AppWrapper from '@/core/AppWrapper';
import { colors, hp } from '@/theme';
import VectorIcons, { iconLibName } from '@/theme/vectorIcon';
import Pressable from '@/core/Pressable';
import AppText, { Variant } from '@/core/AppText';

const FaceScanner = () => {
  return (
    <AppWrapper>
      <View style={styles.headerContainer}>
        <Pressable style={styles.backButton}>
          <VectorIcons
            name={iconLibName.Ionicons}
            iconName="chevron-back"
            size={hp(3)}
            color={colors.black}
          />
          <AppText variant={Variant.ligntBody}>Scan your face</AppText>
        </Pressable>
      </View>

      {/* Full screen camera */}
      <View style={styles.cameraContainer}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          }}
        />
      </View>
    </AppWrapper>
  );
};

export default FaceScanner;

const styles = StyleSheet.create({
  headerContainer: {
    padding: hp(2),
    backgroundColor: colors.white,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(1),
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
  preview: {
    flex: 1,
  },
});
