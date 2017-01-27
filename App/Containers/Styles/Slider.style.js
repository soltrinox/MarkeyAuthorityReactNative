import { StyleSheet } from 'react-native';
import { itemHorizontalMargin, itemWidth } from './SliderEntry.style';

export default StyleSheet.create({
  slider: {
    marginBottom: 35
  },
  sliderContainer: {
  },
  slide: {
    flexDirection: 'column',
    width: itemWidth,
    paddingHorizontal: itemHorizontalMargin
  }
});
