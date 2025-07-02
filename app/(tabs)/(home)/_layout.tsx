import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Inicio',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='profile'
        options={{
          title: 'Mi Perfil',
        }}
      />
      <Stack.Screen
        name='notifications'
        options={{
          title: 'Notificaciones',
        }}
      />
      <Stack.Screen
        name='activity'
        options={{
          title: 'Actividad Reciente',
        }}
      />
    </Stack>
  );
}
