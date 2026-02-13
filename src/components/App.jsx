import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { CoinTotal } from './coinTotal.jsx';
import { CubeVolume } from './cubeVolume.jsx';
import { EarthquakeDamage } from './earthquakeDamage.jsx';
import { Fahrenheit2celsius } from './fahrenheit2celsius.jsx';
import { GymmembershipCost } from './gymmembershipCost.jsx';
import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <CoinTotal nickels={3} dimes={4} quarters={1} loonies={1} toonies={1} />
      <CoinTotal nickels={6} dimes={2} quarters={1} loonies={1} toonies={1} />
      <Fahrenheit2celsius f = {100} />
      <CubeVolume height = {3} />
      <GymmembershipCost cost={85}/>
      <EarthquakeDamage intensity = {3} />

    </View>
  );
}

