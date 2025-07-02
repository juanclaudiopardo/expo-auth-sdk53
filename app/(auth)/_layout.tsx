import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name='sign-in' options={{ headerShown: false }} />
      <Stack.Screen name='register' />
      <Stack.Screen name='forgot-password' />
    </Stack>
  );
}
