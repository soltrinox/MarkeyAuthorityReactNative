import { StyleSheet } from 'react-native';
import { itemHorizontalMargin, itemWidth } from './SliderEntry.style';

export default StyleSheet.create({
  slider: {
    marginBottom: 0
  },
  sliderContainer: {
    padding: 4
  },
  slide: {
    borderRadius: 8,

    flexDirection: 'column',
    width: itemWidth,
    paddingHorizontal: itemHorizontalMargin
  }
});
