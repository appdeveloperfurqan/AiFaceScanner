import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppWrapper from '@/core/AppWrapper';
import { colors, getFontSize, hp, wp } from '@/theme';
import VectorIcons, { iconLibName } from '@/theme/vectorIcon';
import Pressable from '@/core/Pressable';
import AppText, { Variant } from '@/core/AppText';
import * as Progress from 'react-native-progress';
import Scrollable from '@/core/Scrollable';
import RecommendationTabs from '@/components/RecommendationTabs';
import { Images } from '@/assets';
import WrinklesTab from '@/components/WrinklesTab';
import BaldnessTab from '@/components/BaldnessTab';
import AppButton from '@/core/AppButton';
import { useNavigation } from '@react-navigation/native';
import { screenNames } from '@/navigation/screenNames';

const OnBoardScreen = () => {
  const navigation = useNavigation();
  const [actiiveTab, setActiveTab] = useState('wrinkles');
  const testResults = [
    { id: 1, label: 'Problem severity', percentage: '40%' },
    { id: 2, label: 'Your skin age', percentage: '25%' },
  ];

  const statistics = [
    { id: 1, label: 'Skin statistics', value: '70%', progress: 0.7 },
    { id: 2, label: 'Acne', value: '0%', progress: 0.0 },
    { id: 3, label: 'Acne', value: '5%', progress: 0.5 },
    { id: 4, label: 'Acne', value: '100%', progress: 1.0 },
  ];
  const tabs = [
    {
      key: 'wrinkles',
      title: 'For wrinkles',
      component: () => <WrinklesTab />
    },
    {
      key: 'baldness',
      title: 'For baldness',
      component: () => <BaldnessTab />,
    },
  ];


  return (
    <AppWrapper>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate(screenNames.FACE_SCANNER_SCREEN)} style={styles.btnContainer}>
          <View style={styles.innerContainer}>
            <AppText color={colors.white} variant={Variant.body}>Scan</AppText>
          </View>
        </Pressable>
      </View>
    </AppWrapper>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    backgroundColor: colors.white,
    padding: hp(1),
    height: hp(10),
    width: hp(10),
    borderRadius: hp(6.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black
  },
  innerContainer: {
    backgroundColor: colors.black,
    padding: hp(1),
    height: hp(8),
    width: hp(8),
    borderRadius: hp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(1),
  },
  title: {
    marginTop: hp(2),
  },
  description: {
    marginTop: hp(1),
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  resultBox: {
    gap: hp(1),
    height: hp(12),
    width: wp(44),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.softGreen,
    borderRadius: hp(1),
  },
  statisticBox: {
    padding: hp(1.5),
    backgroundColor: colors.softGreen,
    borderRadius: hp(1),
    marginTop: hp(0.5),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statisticItem: {
    width: '50%',
    marginBottom: hp(1.5),
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(1),
  },
});
