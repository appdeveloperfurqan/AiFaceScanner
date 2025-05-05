import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import React, { useState } from 'react';
import { colors } from '@/theme';
import AppText, { Variant } from '@/core/AppText';



const RecommendationTabs = ({ tabs, onTabChange }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    const routes = tabs.map(tab => ({
        key: tab.key,
        title: tab.title,
    }));

    const renderScene = ({ route }) => {
        const tabIndex = routes.findIndex(r => r.key === route.key);
        if (tabIndex === index) {
            const Component = tabs[tabIndex].component;
            return <Component {...tabs[tabIndex].props} />;
        }
        return null;
    };

    const handleIndexChange = newIndex => {
        setIndex(newIndex);
        const selectedTab = newIndex === 0 ? 'Personal' : 'Groups';
        onTabChange(selectedTab);
    };

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            label={({ route, focused, color }) => (
                <AppText variant={focused ? Variant.bodybold : Variant.ligntBody} >
                    {route.title}
                </AppText>
            )}
            activeColor={colors.black}
            inactiveColor={colors.darkGray}
            
        // scrollEnabled={true}

        />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={handleIndexChange}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
            style={styles.tabView}

        />
    );
};

const styles = StyleSheet.create({
    indicator: {
        backgroundColor: colors.black,
    },
    tabBar: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0.3,
        borderColor: colors.grey,
        elevation: 0,
    },
    label: {
        paddingBottom: 15,
        color: colors.primary,
        fontWeight: "900"
    },
    tabView: {
        shadowOpacity: 0,
    }
});

export default RecommendationTabs;
