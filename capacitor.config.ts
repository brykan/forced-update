import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
   plugins: {
    LiveUpdates: {
      appId: '44a13948',
      channel: 'Production',
      autoUpdateMethod: 'none',
      maxVersions: 2
    },
    SplashScreen: {
      launchAutoHide: false
    }
  }
};

export default config;
