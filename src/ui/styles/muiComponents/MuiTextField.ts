const MuiTextField = {
  styleOverrides: {
    root: {
      '& .MuiInputBase-root': {
        fontSize: '13px',
        borderRadius: '5px',
        paddingLeft: '12px',

        '& svg': {
          width: '20px',
          height: '20px',
          color: '#0000008A',
        },
      },
      '& .MuiInputBase-input': {
        padding: '8px 12px 8px 8px',
      },
    },
  },
};

export default MuiTextField;
