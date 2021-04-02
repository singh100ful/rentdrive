import * as React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {PRIMARY, SECONDARY, TEXT, TEXTDARK, WHITE} from 'src/styles/colors';
import {SCALE_5, SCALE_15, SCALE_10, SCALE_65} from 'src/styles/spacing';
import {FONT_SIZE_12, FONT_SIZE_14, FONT_SIZE_16} from 'src/styles/typography';
import TextAtom from '../atoms/TextAtom';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useDispatch} from 'react-redux';
import {Pickup, Drop} from 'src/provider/services/DateService';

interface DatePickerMoleculeProps {
  title: string;
}

const DatePickerMolecule: React.FC<DatePickerMoleculeProps> = props => {
  const [selected, setSelected] = React.useState('');
  const [scroll, setScroll] = React.useState(true);
  const [value, setValue] = React.useState([12]);
  const dispatch = useDispatch();
  const min = 0;
  const max = 24;
  const minDate = new Date();

  const onDayPress = (date: any) => {
    setSelected(date);

    var format = new Date(date);

    if (props.title === 'Pickup') {
      dispatch(Pickup(format));
    } else {
      dispatch(Drop(format));
    }
  };

  const onSlideChange = (values: any) => {
    if (selected) {
      var format = new Date(selected);
      format.setHours(values);

      if (props.title === 'Pickup') {
        dispatch(Pickup(format));
      } else {
        dispatch(Drop(format));
      }
    }
    setValue(values);
  };

  const enableScroll = () => setScroll(true);
  const disableScroll = () => setScroll(false);

  const renderScale = () => {
    const items = [];

    for (let i = min; i <= max; i++) {
      items.push(
        <View
          style={{
            width: Dimensions.get('window').width * 0.099,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          key={i}>
          <Text style={{color: TEXTDARK}}>|</Text>
          <Text style={{color: TEXTDARK}}>{i}</Text>
        </View>,
      );
    }
    return items;
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: WHITE,
          padding: SCALE_5,
          paddingHorizontal: SCALE_15,
        }}>
        <TextAtom
          text={props.title + ' Date'}
          style={{fontSize: FONT_SIZE_16, fontWeight: 'bold'}}
        />
      </View>
      <CalendarPicker
        onDateChange={onDayPress}
        monthTitleStyle={{
          color: TEXTDARK,
          fontWeight: 'bold',
          fontSize: FONT_SIZE_16,
        }}
        minDate={minDate}
        weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
        textStyle={{color: TEXTDARK, fontSize: FONT_SIZE_14}}
        selectedDayStyle={{backgroundColor: SECONDARY, borderRadius: SCALE_5}}
        selectedDayTextStyle={{
          fontWeight: 'bold',
          color: TEXTDARK,
          fontSize: FONT_SIZE_16,
        }}
        previousComponent={
          <Icon name="chevron-back" color={PRIMARY} size={30} />
        }
        nextComponent={
          <Icon name="chevron-forward" color={PRIMARY} size={30} />
        }
      />
      <View>
        <View
          style={{
            backgroundColor: WHITE,
            padding: SCALE_5,
            paddingHorizontal: SCALE_15,
          }}>
          <TextAtom
            text={props.title + ' Time'}
            style={{fontSize: FONT_SIZE_16, fontWeight: 'bold'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SCALE_5,
          }}>
          <View
            style={{
              width: SCALE_65,
              padding: SCALE_5,
              backgroundColor: SECONDARY,
              borderRadius: SCALE_5,
            }}>
            <TextAtom
              text={value + ':00'}
              style={{
                textAlign: 'center',
                fontSize: FONT_SIZE_16,
                color: TEXTDARK,
                fontWeight: 'bold',
              }}
            />
          </View>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        scrollEnabled={scroll}
        contentContainerStyle={{
          paddingHorizontal: SCALE_10,
          paddingBottom: SCALE_10,
          width: Dimensions.get('window').width * 2.5,
          flexDirection: 'column',
        }}
        style={{paddingHorizontal: SCALE_10}}>
        <View>
          <MultiSlider
            trackStyle={{backgroundColor: TEXTDARK}}
            selectedStyle={{backgroundColor: TEXTDARK}}
            onValuesChangeStart={disableScroll}
            onValuesChangeFinish={enableScroll}
            values={value}
            onValuesChange={onSlideChange}
            markerStyle={{backgroundColor: SECONDARY, borderColor: SECONDARY}}
            sliderLength={Dimensions.get('window').width * 2.4}
            min={min}
            max={max}
            step={1}
            allowOverlap={false}
            snapped={true}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: Dimensions.get('window').width * 2.4,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {renderScale()}
        </View>
      </ScrollView>
      <TextAtom
        text="Slide to select hour"
        style={{
          textAlign: 'center',
          fontSize: FONT_SIZE_12,
          color: TEXT,
        }}
      />
    </View>
  );
};

export default DatePickerMolecule;
