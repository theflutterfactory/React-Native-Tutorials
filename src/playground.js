import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import * as Progress from 'react-native-progress';

export default Playground = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

  const source = Platform.OS === 'ios' ? require('./assets/sample.html')
    : { uri: 'file:///android_asset/sample.html' };

  const javascript = `
  document.body.style.backgroundColor = 'orange';
  window.alert('This is javascript');
`;

  return <>
    {
      !isLoaded ?
        <Progress.Bar
          progress={progress}
          width={null}
          borderWidth={0}
          borderRadius={0}
          color='#ff8300'
        /> : null
    }
    <WebView
      source={{
        uri: 'https://google.com',
        headers: { 'key': 'value' }
      }}
      // source={{ html: '<h1>This is a statsampleic HTML source!</h1>' }}
      // source={source}
      onError={(event) =>
        alert(`Webview error: ${event.nativeEvent.description}`)
      }
      // injectedJavaScript={javascript}
      onMessage={(event) => {
        alert(event.nativeEvent.data);
      }}
      onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
      onLoadEnd={() => setLoaded(true)}
    />
  </>
}
