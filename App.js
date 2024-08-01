import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import Footer from './src/components/Footer';
import Form from './src/components/Form';
import ResultCalculation from './src/components/ResultCalculation';
import colors from './src/utils/colors';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (capital && interes && months) calcular();
    else reset();
  }, [capital, interes, months]);

  const calcular = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!interes) {
      setErrorMessage('Añade el interes del prestamo');
    } else if (!months) {
      setErrorMessage('Selecciona los meses a pagar');
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ','),
      });
      console.log(total);
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.PRIMARY_COLOR} //color extra que no esta en el video
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setMonths={setMonths}
          months={months}
        />
      </SafeAreaView>

      <ResultCalculation
        capital={capital}
        interes={interes}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />

      <Footer calcular={calcular} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 270, //height: 290 es el dato que esta en el video
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffff',
    marginTop: 15,
  },
});
