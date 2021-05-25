import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  flexBox: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    '@media screen and (max-width: 767px)': {
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
  },
});

interface Props {
  children: React.ReactNode,
}

export default function FlexWrapper({ children }: Props) {
  const classes = useStyles();
  return <div className={classes.flexBox}>{children}</div>;
};

