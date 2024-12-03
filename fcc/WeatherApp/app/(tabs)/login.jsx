import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { TextInput, Button, Text, useTheme, HelperText } from "react-native-paper";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    const theme = useTheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: "<YOUR_GOOGLE_CLIENT_ID>",
        redirectUri: "https://auth.expo.io/@your-username/your-app-slug", // Ajusta esto según tu configuración
    });

    useEffect(() => {
        if (response?.type === "success") {
            const { authentication } = response;
            console.log("Google Authentication Success:", authentication);
            // Aquí puedes usar el token de acceso para obtener datos del usuario
        }
    }, [response]);

    const validateAndLogin = () => {
        let hasError = false;
        if (!email || !email.includes("@")) {
            setEmailError(true);
            hasError = true;
        } else {
            setEmailError(false);
        }

        if (!password || password.length < 6) {
            setPasswordError(true);
            hasError = true;
        } else {
            setPasswordError(false);
        }

        if (!hasError) {
            // Lógica de autenticación aquí
            console.log("Logging in with", { email, password });
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/react-logo.png")}
                style={styles.logo}
            />
            <Text style={[styles.title, { color: theme.colors.primary }]}>Bienvenido</Text>
            <TextInput
                label="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                error={emailError}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
            />
            {emailError && (
                <HelperText type="error" visible={emailError}>
                    Por favor, ingresa un correo válido.
                </HelperText>
            )}
            <TextInput
                label="Contraseña"
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                secureTextEntry={!showPassword}
                right={
                    <TextInput.Icon
                        icon={showPassword ? "eye-off" : "eye"}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
                error={passwordError}
                style={styles.input}
            />
            {passwordError && (
                <HelperText type="error" visible={passwordError}>
                    La contraseña debe tener al menos 6 caracteres.
                </HelperText>
            )}
            <Button
                mode="contained"
                onPress={validateAndLogin}
                style={styles.button}
            >
                Iniciar sesión
            </Button>
            <Button
                mode="outlined"
                icon="google"
                onPress={() => promptAsync()}
                style={styles.googleButton}
            >
                Iniciar sesión con Google
            </Button>
            <Button mode="text" onPress={() => console.log("Navigate to Register")}>
                ¿No tienes una cuenta? Regístrate
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
        paddingVertical: 5,
    },
    googleButton: {
        marginTop: 10,
        borderColor: "#DB4437",
        borderWidth: 1,
    },
});
