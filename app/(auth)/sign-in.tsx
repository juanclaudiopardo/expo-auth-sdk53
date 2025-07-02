import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Por favor ingresa email y contraseña');
      return;
    }

    try {
      setIsSubmitting(true);
      await signIn(email.trim(), password);
    } catch (error) {
      Alert.alert(
        'Error',
        error instanceof Error ? error.message : 'Error al iniciar sesión'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fillTestCredentials = () => {
    setEmail('test@example.com');
    setPassword('password');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.form}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='tu@email.com'
            editable={!isSubmitting}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder='Tu contraseña'
            editable={!isSubmitting}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, isSubmitting && styles.buttonDisabled]}
          onPress={handleSignIn}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator color='#fff' />
          ) : (
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          )}
        </TouchableOpacity>

        {/* Enlaces de navegación */}
        <View style={styles.linksContainer}>
          <Link href='/forgot-password' style={styles.forgotLink}>
            ¿Olvidaste tu contraseña?
          </Link>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>¿No tienes cuenta? </Text>
            <Link href='/register' style={styles.registerLink}>
              Regístrate
            </Link>
          </View>
        </View>

        <TouchableOpacity
          style={styles.testButton}
          onPress={fillTestCredentials}
          disabled={isSubmitting}
        >
          <Text style={styles.testButtonText}>Usar credenciales de prueba</Text>
        </TouchableOpacity>

        <Text style={styles.hint}>
          Para probar: test@example.com / password
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  linksContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  forgotLink: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginBottom: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#666',
  },
  registerLink: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  testButton: {
    marginTop: 32,
    alignItems: 'center',
  },
  testButtonText: {
    color: '#007AFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  hint: {
    textAlign: 'center',
    marginTop: 16,
    color: '#666',
    fontSize: 14,
  },
});
