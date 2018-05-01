import React, { Component } from 'react'
import {ListView, View, Dimensions} from 'react-native'
import PropTypes from 'prop-types';

export default class Grid extends Component {

  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    column: PropTypes.number.isRequired,
    row: PropTypes.number
  }

  constructor(props){
    super(props)

    this.windowWidth = Dimensions.get('window').width
    this.windowHeight = Dimensions.get('window').height

    this.width = this.windowWidth * (1/this.props.column)

    if(this.props.row)
        this.height = this.windowHeight * (1/this.props.row)
    else
        this.height = this.windowWidth * (1/this.props.column)
    
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      width: this.width,
      height: this.height,
      dataSource: ds.cloneWithRows(this.props.dataSource)
    }
  }

  componentDidUpdate(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.dataSource)
    });
  }

  render(){
    return(
      <ListView
        {...this.props}
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        dataSource={this.state.dataSource}
        renderRow={(rowData, sectionID, rowID, highlightRow) => {
          return (
              <View  style={{width: this.state.width ,height: this.state.height}}>
                {this.props.rowView(rowData, sectionID, rowID, highlightRow)}
              </View>
          );
        }}/>
    )
  }
}