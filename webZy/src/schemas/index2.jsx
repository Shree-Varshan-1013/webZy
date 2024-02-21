import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
    userName: Yup.string()
        .required("Please enter your email or username")
        .test(
            'is-email-or-username',
            'Invalid email or username',
            function (value) {
                const { path, createError } = this;

                // Check if the value matches email or username pattern
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const isEmail = emailRegex.test(value);
                const isUsername = !emailRegex.test(value) && value.length >= 3 && value.length <= 15; // Assuming username length between 3 and 15 characters

                if (!isEmail && !isUsername) {
                    return createError({ path, message: 'Invalid email or username' });
                }

                return true;
            }
        ),
    userPassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(15, "Password must be at most 15 characters")
        .required("Please enter your password")
});
