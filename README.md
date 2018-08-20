
# react-native-simple-grid

Easy to use and full customized grid for React Native.

## Installation

`$ npm install react-native-simple-grid --save`

## Usage

```js
import Grid from 'react-native-simple-grid';

<Grid
	dataSource={data}
	column={2} 
	rowView={(rowData) => {
		return (
			<View style={{flex: 1, backgroundColor: rowData.color}}>
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

![react-native-simlpe-grid](https://github.com/bhavik66/react-native-simple-grid/blob/master/screenshot/001.png?raw=true)
