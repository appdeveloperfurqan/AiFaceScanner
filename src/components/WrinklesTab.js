import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

import AppText, { Variant } from '@/core/AppText';
import { colors, hp, wp } from '@/theme';
import { wrinkleTabData } from '@/utilities/DummyData';

const WrinklesTab = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <AppText variant={Variant.caption}>{item.title}</AppText>
        <AppText variant={Variant.captionLight}>{item.description}</AppText>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={wrinkleTabData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WrinklesTab;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(1),
  },
  itemContainer: {
    padding: hp(2),
    backgroundColor: colors.softGreen,
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(1),
    marginBottom: hp(1.5),
    borderRadius: hp(1),
  },
  imageContainer: {
    height: hp(10),
    width: wp(18),
    borderRadius: hp(0.5),
    backgroundColor: colors.white,
    padding: hp(0.5),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    maxWidth: wp(60),
    gap: hp(0.5),
  },
});
