import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
interface Props {
  children: React.ReactNode,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
}

export default function Form({ children, onSubmit }: Props) {
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};


