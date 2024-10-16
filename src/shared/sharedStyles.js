const sharedStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column', // Allows stacking of rows
        padding: '20px',
        gap: '10px', // Space between rows
        height: '100%',
        overflow: 'scroll'
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: '-15px',
      marginRight: '-15px',
    },
    col: {
      flex: 1,
      padding: '15px',
      boxSizing: 'border-box'
    },
    
    col1: { flex: '0 0 8.33%' },
    col2: { flex: '0 0 16.66%' },
    col3: { flex: '0 0 25%' },
    col4: { flex: '0 0 33.33%' },
    col5: { flex: '0 0 41.66%' },
    col6: { flex: '0 0 50%' },
    col7: { flex: '0 0 58.33%' },
    col8: { flex: '0 0 66.66%' },
    col9: { flex: '0 0 75%' },
    col10: { flex: '0 0 83.33%' },
    col11: { flex: '0 0 91.66%' },
    col12: { flex: '0 0 100%' },
    centerText:{
      justifyContent: 'center'
    }
    
  };
  
  export default sharedStyles;
  