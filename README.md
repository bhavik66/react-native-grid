
# react-native-simple-grid

Easy to use and full customized grid for React Native.

## Installation

`$ npm install react-native-simple-grid --save`

## Usage

```js
import Grid from 'react-native-simple-grid';

<Grid
	dataSource={data.data} 
	column={2} 
	rowView={(rowData) => {
	return(
		<View  style={{flex:  1, backgroundColor:  rowData.color}}  >
		<Text>{rowData.name}</Text>
		</View>
	)
	}}
	/>
```

### Properties

| Prop | Description |
|---|---|
|**`dataSource`**|For simplicity, dataSource is just a plain array.
|**`column`**|Number of column in grid.
|**`rowView`**|Takes an item from `data` and renders it into the list.
|**`row`**|Number of row show in screen at a time.

other properties are derived from [ListView](https://facebook.github.io/react-native/docs/listview.html#props)

## Example

[Wallpaper World](https://play.google.com/store/apps/details?id=com.pixabro.wallpaperworld)

![enter image description here](https://lh3.googleusercontent.com/x8ZcviqEA9uF1bbmten0OVJWeSxVfChbE-R9wpZ7ngUuYLhJMQnzD9_PbYlZ-uvsBtEBXJmvowmRJF4YGBOEXOCWwEM73Mu8UvwztkOtNgVVU3AbvB76IOyQyg8tMIP6lH4tiy0Fz5EVx7Xlcdr0talow5AGgmFcI64FBkO4YOCcc0VMnZY632l1aWbOC8fQEOk5fTsv6eBty6nlhvMDCztsgOSffLufKmcONZIpChqtrUEvehyX7XpOutQu7IJzgVbbQHwkaJbdxTQy0Dnxj80-PX3KQIiI4X01T_O_xcU4QHTkPEyMkiSmOIcjVE4B1jGQPDVcrGA4E4bS-sHScfwbxcTeLfOVvY0UfRGD7lL-nPjKtwwciZX7xzvOtrfnwsM7lMoATGfinf--WvBh_DMMOOLYsksgLiq2ttNWS2KanOoU-C9h1USDvRo0Lv9_Xej9O6x2arlCFK2vJZXkwgukBpp8IQNwwyJj0MYW3OBWotp27y_ikU52Z9LcLB8QUVONTArM1OGqkup1pAt7tCgEcvO-bHP0CPEgW00exdP18il8GsH7EBkeI3Zr2-GUE9YXsVS0Senn9c6t0TP3tFPU9D5s2GxRnbrjTgw=w373-h662-no)