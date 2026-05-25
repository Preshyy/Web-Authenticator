export const getFriendlyFirebaseError = (errorCode) => {
    switch (errorCode) {
        case 'auth/user-not-found':
            return 'No user found with this email address.';
        case 'auth/wrong-password':
            return 'Incorrect password. Please try again.';
        case 'auth/missing-password':
            return 'Please enter your password.';
        case 'auth/email-already-in-use':
            return 'An account with this email address already exists.';
        case 'auth/invalid-email':
            return 'Please enter a valid email address.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters long. Please choose a stronger password.';
        case 'auth/too-many-requests':
            return 'Too many unsuccessful login attempts. Please try again later.';
        case 'auth/invalid-credential':
            return 'Invalid email or password. Please check and try again.';
        default:
            return 'An unexpected error occurred. Please try again.';
    }
}