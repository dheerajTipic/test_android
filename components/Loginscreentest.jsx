import React, { useState } from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import { Button, Text, TextInput, IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { login } from '../app/util/api';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showEmailSuggestion, setShowEmailSuggestion] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validate = () => {
    let valid = true;

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text.includes('@')) {
      setShowEmailSuggestion(false);
    } else {
      setShowEmailSuggestion(true);
    }
  };

  const handleLogin = async () => {
    if (validate()) {
      try {
        const response = await login({ email, password });
        Alert.alert("Login Successful", `token: ${response.data.token}`);
      } catch (error) {
        console.error(error);
        Alert.alert("Login Failed", "Invalid email or password.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header} variant="h4">Login</Text>
      <View style={styles.Line}></View>

      <TextInput
        onChangeText={handleEmailChange}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        label="E-mail"
        leading={props => <Icon name="account" {...props} />}
        style={styles.input}
      />
      {showEmailSuggestion && (
        <Text style={styles.suggestion}>Enter valid e-maill id</Text>
      )}
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

<TextInput
  label="Password"
  onChangeText={(text) => setPassword(text)}
  value={password}
  secureTextEntry={!isPasswordVisible}
  trailing={props => (
    <IconButton
      icon={(props) => (
        <Icon name={isPasswordVisible ? "eye-off" : "eye"} />
      )}
      onPress={togglePasswordVisibility}
    />
  )}
  style={styles.input}
/>

      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <Button
        title="Login"
        onPress={handleLogin}
        color="#007BFF"
        style={[styles.button]}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    height: 450,
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  suggestion: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
    textAlign: 'left',
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
    textAlign: 'left',
  },
  button: {
    marginTop: 20,
    borderRadius: 30,
    alignSelf: 'center',
    width: '50%',
    paddingVertical: 12,
  },
  Line: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginVertical: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;
