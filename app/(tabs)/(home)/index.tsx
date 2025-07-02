import { Link } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAuth } from '../../../context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Hola, {user?.name || 'Usuario'}</Text>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Información de la sesión</Text>
          <Text style={styles.cardText}>
            Has iniciado sesión correctamente con {user?.email}
          </Text>
          <Text style={styles.cardText}>
            Explora las diferentes secciones usando los botones de abajo.
          </Text>
        </View>

        <View style={styles.navigationSection}>
          <Text style={styles.sectionTitle}>Navegar a:</Text>

          <Link href='/profile' asChild>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>📱 Mi Perfil</Text>
              <Text style={styles.navButtonSubtext}>
                Ve y edita tu información personal
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href='/notifications' asChild>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>🔔 Notificaciones</Text>
              <Text style={styles.navButtonSubtext}>
                Revisa tus notificaciones recientes
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href='/activity' asChild>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>📊 Actividad Reciente</Text>
              <Text style={styles.navButtonSubtext}>
                Historial de tu actividad
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 8,
  },
  navigationSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  navButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 4,
  },
  navButtonSubtext: {
    fontSize: 14,
    color: '#666',
  },
});
