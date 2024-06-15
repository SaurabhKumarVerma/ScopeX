import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ScreenName} from '../ScreenName/ScreenName';
import {colors} from '../../theme/color/color';
import IconButton from '../../base/Text/IconButton/IconButton';
import Text from '../../base/Text/Text';
interface IBottomIcon {
  isFocused: boolean;
  routeName: string;
  index: number;
  isDarkMode: boolean;
}

/**
 * A clickable icon that displays a given route name and its corresponding icon. The icon name is determined by the `routeName` prop and a map of route names to icon names. If the icon is currently selected, the container will have a black background color, and the route name will be displayed below the icon. If the icon is not selected, the container will have a transparent background color and the route name will not be displayed.
 *
 * @param {IBottomIcon} props - The component props.
 * @param {boolean} props.isFocused - A boolean value that indicates whether the icon is currently selected.
 * @param {string} props.routeName - A string that represents the name of the route associated with the icon.
 * @param {number} props.index - An index that can be used to differentiate between multiple icons.
 */

const BottomIcon = (props: IBottomIcon) => {
  const routeMap = {
    Home: 'home',
    Profile: 'people',
    Settings: 'settings',
  };

  const routeName = (name: string) => {
    const defaultIconName = ScreenName.HOME;
    const iconName = routeMap[name];
    return iconName || defaultIconName;
  };

  return (
    <View>
      <View style={styles.iconContainer}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: props.isFocused
                ? colors.black
                : colors.transparent,
            },
          ]}>
          <IconButton
            icon={routeName(props.routeName)}
            size={'medium'}
            iconColor={!props.isFocused ? colors.white : colors.darkCharcoal}
            style={{padding: 10}}
            iconFamily="Ionicons"
          />
        </View>
        <View>
          <Text isDarkMode={props.isDarkMode} style={styles.routeNameStyle}>
            {props.routeName}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 1,
  },
  routeNameStyle: {
    color: colors.darkCharcoal,
    fontSize: 14,
    fontWeight: '500',
    overflow: 'hidden',
    paddingTop: 2,
    marginBottom: 8,
  },
  routeNameContainer: {
    backgroundColor: 'grey',
    marginLeft: -20,
    overflow: 'hidden',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    borderTopColor: 'transparent',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default BottomIcon;
