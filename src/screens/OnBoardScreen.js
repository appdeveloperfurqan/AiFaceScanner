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

const OnBoardScreen = () => {
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
      <Scrollable containerStyle={styles.container}>
        <Pressable style={styles.backButton}>
          <VectorIcons
            name={iconLibName.Ionicons}
            iconName="chevron-back"
            size={hp(3)}
            color={colors.black}
          />
          <AppText variant={Variant.ligntBody}>Skin Report</AppText>
        </Pressable>

        <AppText style={styles.title} variant={Variant.subTitle}>
          Skin Test Results
        </AppText>
        <AppText style={styles.description} variant={Variant.ligntBody}>
          This skin test uses AI analysis to reveal any skin issues and suggest possible solutions
        </AppText>

        <View style={styles.resultRow}>
          {testResults.map((item) => (
            <View key={item.id} style={styles.resultBox}>
              <AppText variant={Variant.ligntBody}>{item.label}</AppText>
              <AppText variant={Variant.title}>{item.percentage}</AppText>
            </View>
          ))}
        </View>

        <AppText style={styles.title} variant={Variant.subTitle}>
          Skin statistics
        </AppText>

        <View style={styles.statisticBox}>
          {statistics.map((item) => (
            <View key={item.id} style={styles.statisticItem}>
              <AppText variant={Variant.ligntBody}>{item.label}</AppText>
              <View style={styles.progressRow}>
                <AppText variant={Variant.ligntBody}>{item.value}</AppText>
                <Progress.Bar
                  unfilledColor={colors.grayE8}
                  color={colors.green}
                  progress={item.progress}
                  width={wp(28)}
                  height={hp(0.2)}
                  borderWidth={0}
                />
              </View>
            </View>
          ))}
        </View>
        <AppText style={styles.title} variant={Variant.subTitle}>
          Recommendations
        </AppText>
        <RecommendationTabs
          tabs={tabs}
          onTabChange={setActiveTab}
        />
      </Scrollable>
    </AppWrapper>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(2),
    minHeight: hp(120),
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
