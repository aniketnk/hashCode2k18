import React from 'react'
import { Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
 
export default class ScheduleView extends React.Component {
    render() {
        // 376x486
        return (
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={376}
                       imageHeight={486}>
                <Image style={{width:376, height:486}}
                       source={require('./../assets/schedule.jpg')}/>
            </ImageZoom>
        )
    }
}