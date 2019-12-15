import React, { useState } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AppForm from '../components/Form/AppForm';
import { email, required } from '../components/Form/Validation';
import RFTextField from '../components/Form/RFTextField';
import FormButton from '../components/Form/FormButton';
import FormFeedback from '../components/Form/FormFeedback';
import { postUser } from '../api/signin';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
    form: {
        marginTop: theme.spacing(6),
    },
    button: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    feedback: {
        marginTop: theme.spacing(2),
    },
}));


const Login = () => {
    const classes = useStyles();
    const [sent, setSent] = useState(false);
    const dispatch = useDispatch();

    const validate = values => {
        const errors = required(['email', 'password'], values);

        if (!errors.email) {
            const emailError = email(values.email, values);
            if (emailError) {
                errors.email = email(values.email, values);
            }
        }

        return errors;
    };


    const handleSubmit = inputs => {
        setSent(true);
        postUser(inputs, dispatch);
        alert("login fail");
        setSent(false);
    };

    return (
        <React.Fragment>
            <AppForm>
                <React.Fragment>
                    <Typography variant="h4" gutterBottom marked="center" align="center">
                        InstaKgram
          </Typography>
                    <Typography variant="body2" align="center">
                        <Link href="/premium-themes/onepirate/sign-up/" align="center" underline="always">
                            Sign Up here
            </Link>
                    </Typography>
                </React.Fragment>
                <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
                    {({ handleSubmit, submitting }) => (
                        <form onSubmit={handleSubmit} className={classes.form} noValidate>
                            <Field
                                autoComplete="email"
                                autoFocus
                                component={RFTextField}
                                disabled={submitting || sent}
                                fullWidth
                                label="전화번호, 사용자 이름 또는 이메일"
                                margin="normal"
                                name="email"
                                required
                                size="normal"
                            />
                            <Field
                                fullWidth
                                size="large"
                                component={RFTextField}
                                disabled={submitting || sent}
                                required
                                name="password"
                                autoComplete="current-password"
                                label="비밀번호"
                                type="password"
                                margin="normal"
                            />
                            <FormSpy subscription={{ submitError: true }}>
                                {({ submitError }) =>
                                    submitError ? (
                                        <FormFeedback className={classes.feedback} error>
                                            {submitError}
                                        </FormFeedback>
                                    ) : null
                                }
                            </FormSpy>
                            <FormButton
                                className={classes.button}
                                disabled={submitting || sent}
                                size="large"
                                color="secondary"
                                fullWidth
                            >
                                {submitting || sent ? 'In progress…' : '로그인'}
                            </FormButton>
                        </form>
                    )}
                </Form>
                <Typography align="center">
                    <Link underline="always" href="/premium-themes/onepirate/forgot-password/">
                        Forgot password?
          </Link>
                </Typography>
            </AppForm>
        </React.Fragment>
    )
}

export default Login;